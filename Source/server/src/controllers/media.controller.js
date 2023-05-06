import responseHandler from '../handlers/response.handler.js'
import api from '../api/api.js'
import userModel from '../models/user.model.js'
import reviewModel from '../models/review.model.js'
import tokenMiddleware from '../middlewares/token.middleware.js'
import favoriteModel from '../models/favorite.model.js'
import genreModel from '../models/genre.model.js'

// const getList = async (req, res) => {
//     try {
//         // Lấy thông tin page được yêu cầu trong query parameter
//         const { page } = req.query

//         // Lấy giá trị của 2 tham số từ params
//         const { mediaType, mediaCategory } = req.params

//         // Lấy danh sách media và trả về Promise
//         const response = await api.mediaList({ mediaType, mediaCategory, page })

//         return responseHandler.ok(res, response)
//     } catch {
//         responseHandler.error(res,"Lấy danh sách media thất bại!")
//     }
// }

const addGenres = async (req, res) => {
    try {
        const { name } = req.body
        const checkName = await genreModel.findOne({ name })

        if (checkName) return responseHandler.badrequest(res, 'Tên thể loại đã tồn tại!')

        const genre = await new genreModel({ name })

        try {
            await genre.save()
        } catch (error) {
            console.log(error)
        }

        responseHandler.created(res, genre)
    } catch {
        responseHandler.error(res, 'Thêm thể loại thất bại!')
    }
}

const getGenres = async (req, res) => {
    try {
        const response = await genreModel.find()

        return responseHandler.ok(res, response)
    } catch {
        responseHandler.error(res, 'Lấy danh sách thể loại thất bại!')
    }
}

const search = async (req, res) => {
    try {
        const { mediaType } = req.params
        const { query, page } = req.query

        const response = await api.mediaSearch({
            query,
            page,
            mediaType: mediaType === 'people' ? 'person' : mediaType,
        })

        return responseHandler.ok(res, response)
    } catch {
        responseHandler.error(res, 'search thất bại!')
    }
}

// const getDetail = async (req, res) => {
//     try {
//         const { mediaType, mediaId } = req.params
//         const params = { mediaType, mediaId }

//         const media = await api.mediaDetail(params)
//         media.credits = await api.mediaCredits(params)

//         const videos = await api.mediaVideos(params)
//         media.videos = videos

//         const recommend = await api.mediaRecommend(params)
//         media.recommend = recommend.results

//         media.images = await api.mediaImages(params)

//         const tokenDecoded = tokenMiddleware.tokenDecode(req)

//         if (tokenDecoded) {
//             // Tìm thông tin user
//             const user = await userModel.findById(tokenDecoded.data)

//             if (user) {
//                 // Tìm danh sách yêu thích của user
//                 // Nếu mediaId tồn tại: isFavorite === true
//                 const isFavorite = await favoriteModel.findOne({
//                     user: user.id,
//                     mediaId
//                 })

//                 // Gán giá trị isFavorite vào media
//                 media.isFavorite = isFavorite !== null
//             }
//         }

//         // Lấy đánh giá, sử dụng hàm populate lấy info user đăng review và sắp xếp theo thứ tự giảm dần của thời gian tạo
//         media.reviews = await reviewModel.find({ mediaId }).populate("user").sort("-createAt")

//         return responseHandler.ok(res, media)
//     } catch {
//         responseHandler.error(res, "lấy danh sách review thất bại")
//     }
// }

export default { getGenres, search, addGenres }
