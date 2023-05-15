import responseHandler from '../handlers/response.handler.js'
import refreshtokenModel from '../models/refreshtoken.model.js'
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
    if (!user) return responseHandler.unauthorize(res, 'Không tìm thấy user')

    // Gán user trong request = user trong MongoDB
    req.user = user

    // Chuyển request đến middleware kế tiếp
    next()
}

const verifyTokenAndRefresh = async (req, res, next) => {
    const { accessToken } = req.cookies

    try {
        // Kiểm tra tính hợp lệ của access token
        const decoded = jsonwebtoken.verify(accessToken, process.env.TOKEN_SECRET)
        // Thêm thông tin người dùng vào đối tượng yêu cầu
        req.user = decoded.user
        // Tiếp tục xử lý yêu cầu
        next()
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            // Access token đã hết hạn, kiểm tra refresh token
            const { refreshToken } = req.cookies

            try {
                // Kiểm tra tính hợp lệ của refresh token
                const refreshTokenDoc = await refreshtokenModel.findOne({ token: refreshToken })
                if (!refreshTokenDoc) {
                    responseHandler.badrequest(res, 'Refresh token không hợp lệ')
                }

                const user = await userModel
                    .findById(refreshTokenDoc.user.id)
                    .select('username password salt id displayName roles createdAt updatedAt')
                if (!user) return responseHandler.badrequest(res, 'Người dùng không tồn tại!')

                const payload = {
                    roles: user.roles,
                    infor: {
                        id: user.id,
                        displayName: user.displayName,
                        username: user.username,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt,
                    },
                }

                const newAccessToken = jsonwebtoken.sign(payload, process.env.TOKEN_SECRET, {
                    expiresIn: '30m',
                })
                const newRefreshToken = jsonwebtoken.sign(payload, process.env.TOKEN_SECRET)

                function calculateExpiryDate() {
                    const expiresInDays = 30 // Số ngày hết hạn của Refresh Token
                    const expiryDate = new Date()
                    expiryDate.setDate(expiryDate.getDate() + expiresInDays)
                    return expiryDate
                }

                refreshTokenDoc.token = newRefreshToken
                await refreshTokenDoc.save()

                res.cookie('accessToken', newAccessToken, {
                    httpOnly: true,
                    maxAge: 0.5 * 30 * 60 * 1000,
                    secure: true,
                    sameSite: true,
                })
                res.cookie('refreshToken', newRefreshToken, {
                    httpOnly: true,
                    maxAge: calculateExpiryDate(),
                    secure: true,
                    sameSite: true,
                })

                req.user = user

                next()
            } catch (error) {
                console.log(error)
                responseHandler.unauthorize(res, 'Token không hợp lệ.')
            }
        } else {
            console.log(error)
            responseHandler.unauthorize(res, 'Token không hợp lệ!')
        }
    }
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

export default { auth, tokenDecode, tokenGlobal, verifyTokenAndRefresh }
