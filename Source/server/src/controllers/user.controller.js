import jsonwebtoken from "jsonwebtoken";
import userModel from "../models/user.model.js";
import responseHandler from "../handlers/response.handler.js";
import { response } from "express";

const signup = async (req, res) => {
  try {
    // Lấy thông tin user mới được gửi lên trong request body
    const { username, password, displayName, roles } = req.body;

    // Kiểm tra xem user đó đã tồn tại trong database chưa
    const checkUser = await userModel.findOne({ username });

    if (checkUser)
      return responseHandler.badrequest(res, "Tài khoản đã tồn tại!");

    const user = new userModel();

    user.displayName = displayName;
    user.username = username;
    if (roles) {
      user.roles = roles;
    } else {
      user.roles = "user"; // Gán giá trị mặc định nếu trường roles rỗng
    }

    user.setPassword(password);

    await user.save();

    // Create JWT
    const payload = {
      roles: user.roles,
      infor: {
        id: user.id,
        displayName: user.displayName,
        username: user.username,
      },
    };

    const token = jsonwebtoken.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" } // LifeCirle Token
    );

    // const { _id, ...userWithoutId } = user._doc;

    // Thông báo tạo thành công
    responseHandler.created(res, {
      access_token: token,
      // id: user.id, // Trả về giá trị của _id của user dưới dạng String
      // ...userWithoutId, // Kế thừa props từ _doc. _doc chứa tất cả các key value trừ _id của đối tượng
    });
  } catch (error) {
    responseHandler.error(res);
  }
};

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Chỉ định các trường cần được trả về, bao gồm cả trường roles
    const user = await userModel
      .findOne({ username })
      .select("username password salt id displayName roles");
    if (!user) return responseHandler.badrequest(res, "User không tồn tại!");

    if (!user.validPassword(password))
      return responseHandler.badrequest(res, "Sai mật khẩu, vui lòng thử lại!");

    // Tạo token truy cập, hạn 24h
    const payload = {
      roles: user.roles,
      infor: {
        id: user.id,
        displayName: user.displayName,
        username: user.username,
      },
    };
    const token = jsonwebtoken.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "24h",
    });

    // Gỡ pass và hash ra khỏi response
    user.password = undefined;
    user.salt = undefined;

    // Gắn đối tượng user đã xác thực vào req object
    req.user = user;

    // const { _id, ...userWithoutId } = user._doc;

    responseHandler.created(res, {
      access_token: token,
    });
  } catch (error) {
    responseHandler.error(res, "Đăng ký không thành công")
  }
};

const updatePassword = async (req, res) => {
  try {
    // Lấy data từ req
    const { password, newPassword } = req.body;

    // Tìm user và lấy các trường được select
    const user = await userModel
      .findById(req.user.id)
      .select("password id salt");

    if (!user) return responseHandler.unauthorize(res);

    if (!user.validPassword(password))
      return responseHandler.badrequest(res, "Sai mật khẩu, vui lòng thử lại!");

    // Đặt lại password mới cho user
    user.setPassword(newPassword);
    await user.save();

    responseHandler.ok(res, {
      statusCode: 200,
      message: "Đổi mật khẩu thành công!",
    });
  } catch {
    responseHandler.error(res);
  }
};

// Lấy danh sách thông tin user
const getInfo = async (req, res) => {
  try {
    const user = await userModel.find();

        if (!user) return responseHandler.notfound(res)
        
        responseHandler.ok(res, user)
    } catch {
        responseHandler.error(res, "Lấy danh sách user không thành công")
    }
}

// Tìm user theo ID
const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await userModel.findById(userId);
    if (!user)
      return responseHandler.notfound(res, {
        statusCode: 404,
        message: "Không tìm thấy thông tin người dùng.",
      });

        responseHandler.ok(res, user)
    } catch {
        responseHandler.error(res, `Tìm user ID: ${userId} không thành công`)
    }
}

const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.body
        const checkUserName = await userModel.findOne({ username }).select("username id displayName")
        if (!checkUserName) return responseHandler.notfound(res, "Không tìm thấy username");
        responseHandler.ok(res, checkUserName);
    } catch {
        responseHandler.error(res, "Tìm username thất bại")
    }
}

const deleteUserById = async (req, res) => {
    try {
        const { userId } = req.params
        const checkUserId = await userModel.findByIdAndDelete(userId)
        if (!checkUserId) return responseHandler.notfound(res, `Không tìm thấy user có ID: ${userId}`);
        responseHandler.ok(res, {
            statusCode: 200,
            message: "Xoá user thành công",
        });
    } catch {
        responseHandler.error(res, "Xoá user thất bại")
    }
}

export default {
    signup,
    signin,
    getInfo,
    getUserById,
    updatePassword,
    getUserByUsername,
    deleteUserById,
};
