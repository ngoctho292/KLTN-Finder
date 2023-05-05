import responseHandler from '../handlers/response.handler.js'
import userModel from '../models/user.model.js'
import jsonwebtoken from 'jsonwebtoken'

const tokenDecode = (req) => {
    try {
        const bearerHeader = req.headers['authorization']

        if (bearerHeader) {
            // Lấy token từ BearerToken. Ex: "Bearer eyJhbGciOiJIUzI1NiIsInR5cC"
            const token = bearerHeader.split(' ')[1]

            // Xác thực token
            return jsonwebtoken.verify(token, process.env.TOKEN_SECRET)
        }

        return false
    } catch (error) {
        return false
    }
}

const auth = async (req, res, next) => {
    // Lấy token đã giải mã
    const tokenDecoded = tokenDecode(req)

    // Nếu không có token sẽ trả lỗi 401
    if (!tokenDecoded) return responseHandler.unauthorize(res, 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!')

    // Tìm user trong MongoDB
    const user = await userModel.findById(tokenDecoded.infor.id)

    // Nếu không có trả lỗi 401
    if (!user) return responseHandler.unauthorize(res, 'k co user')

    // Gán user trong request = user trong MongoDB
    req.user = user

    // Chuyển request đến middleware kế tiếp
    next()
}

const tokenGlobal = async (req, res) => {
    try {
        const { username, password, client_id, client_secret } = req.body

        // Chỉ định các trường cần được trả về
        const user = await userModel.findOne({ username }).select('username password salt id')

        if (!user) return responseHandler.badrequest(res, 'User không tồn tại!')

        if (!user.validPassword(password)) return responseHandler.badrequest(res, 'Sai mật khẩu, vui lòng thử lại!')

        // Tạo token global truy cập, hạn 1h
        if (client_id === process.env.CLIENT_ID && client_secret === process.env.CLIENT_SECRET) {
            var token = jsonwebtoken.sign({ data: user.id }, process.env.TOKEN_SECRET, { expiresIn: '1h' })
        }

        // Gỡ pass và hash ra khỏi response
        user.password = undefined
        user.salt = undefined

        req.user = user

        responseHandler.ok(res, {
            access_token: token,
            token_type: 'bearer',
            expiry: 'Hạn sử dụng 1h.',
            username,
            client_id,
            client_secret,
        })
    } catch {
        responseHandler.error(res, 'Lỗi token')
    }
}

export default { auth, tokenDecode, tokenGlobal }
