import castModel from "../models/cast.model.js"
import responseHandler from "../handlers/response.handler.js"

const addCast = async (req, res) => {
    try {
        const { character, summary, birthYear, profile_path } = req.params
        
        const checkCast = await castModel.findOne({ character }).select("character profile_path")
        if (checkCast) return responseHandler.notfound(res, "Cast đã tồn tại trong hệ thống!")
        
        const cast = new castModel()
        cast.character = character
        cast.summary = summary
        cast.profile_path = profile_path
        cast.birthYear = birthYear

        console.log(cast);
        // try {
            await cast.save();
        // } catch (error) {
        //     console.log(error);
        // }
        responseHandler.created(res, cast)
    } catch {
        responseHandler.error(res, "Thêm cast không thành công.")
    }
}

const removeCast = async (req, res) => {
    try {
        const { castId } = req.params
        const checkCastId = await castModel.findById(castId)
        if (!checkCastId) return responseHandler.notfound(res, `Không tìm thấy cast với ID: ${castId}`)
        
        responseHandler.ok(res, "Xóa cast thành công!")
    } catch {
        responseHandler.error(res, "Xóa cast không thành công.")
    }
}

export default { addCast, removeCast };