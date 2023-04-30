import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";
import movieModel from "../models/movie.model.js"

const addFavorite = async (req, res) => {
    try {

        // Tìm xem media này đã được thêm vào yêu thích chưa
        const isFavorite = await favoriteModel.findOne({
            user: req.user.id,
            mediaId: req.body.mediaId
        })

        // Nếu tồn tại, trả code 200
        if (isFavorite) return responseHandler.ok(res, isFavorite)
        
        // Nếu media này chưa có trong danh sách yêu thích, tạo một đối tượng mới
        const favorite = new favoriteModel({
            ...req.body,
            user: req.user.id
        })

        await favorite.save()

        return responseHandler.created(res, favorite)
    } catch {
        responseHandler.error(res)
    }
}

const removeFavorite = async (req, res) => {
    try {
        const { favoriteId } = req.params
        const favorite = await favoriteModel.findOne({
            user: req.user.id,
            _id: favoriteId // Chỗ này sẽ được xóa trong modelOptions
        })

        if (!favorite) return responseHandler.notfound(res)
        await favorite.remove()

        responseHandler.ok(res)
    } catch {
        responseHandler.error(res)
    }
}

// Lấy danh sách các phim yêu thích của user
const getFavoritesOfUser = async (req, res) => {
    try {
        // Tìm user và sắp xếp kết quả theo thứ tự từ mới đến cũ
        const favorite = await favoriteModel.find({ user: req.user.id }).sort("-createAt")
        
        responseHandler.ok(res, favorite)
    } catch {
        responseHandler.error(res)
    }
}

export default {addFavorite, removeFavorite, getFavoritesOfUser}