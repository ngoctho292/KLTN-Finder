import responseHandler from '../handlers/response.handler.js'
import genreModel from '../models/genre.model.js'
import movieModel from '../models/movie.model.js'

// Tạo mới một bộ phim
const createMovie = async (req, res) => {
    try {
        const {
            type,
            title,
            overview,
            poster_path,
            release_date,
            status,
            vote_average,
            genres,
            backdrop_path,
            trailer,
            video,
            runtime,
            cast,
        } = req.body
        const checkTitle = await movieModel.findOne({ title })
        if (checkTitle) return responseHandler.badrequest(res, 'Phim đã tồn tại trong hệ thống!')
        const [day = '', month = '', year = ''] = release_date.split(',')

        const genresParse = JSON.parse(genres)
        let names = []
        for (let i = 0; i <= genresParse.length - 1; i++) {
            JSON.parse(names.push(genresParse[i].name))
        }
        const getName = await Promise.all(
            names.map(async (name) => {
                const checkName = await genreModel.findOne({ name }).lean()
                if (!checkName) return responseHandler.notfound(res, `Không tìm thấy thể loại trong DB.`)
                return checkName
            }),
        )

        const backdrop_pathParse = JSON.parse(backdrop_path)
        const castParse = JSON.parse(cast)
        console.log(castParse)
        const movie = await new movieModel({
            type,
            title,
            overview,
            poster_path,
            release_date: [{ day, month, year }],
            status,
            vote_average,
            genres: getName,
            backdrop_path: backdrop_pathParse,
            trailer,
            video,
            runtime,
            cast: castParse,
        })
        // console.log(movie);

        try {
            await movie.save()
        } catch (error) {
            console.log(error)
        }

        responseHandler.created(res, {
            ...movie._doc,
        })
    } catch {
        responseHandler.error(res, 'Thêm phim thất bại.')
    }
}

// Xóa một bộ phim
const deleteMovie = async (req, res) => {
    try {
        const { filmId } = req.params
        const movie = await movieModel.findByIdAndDelete(filmId)
        if (!movie) {
            responseHandler.notfound(res, 'Không tìm thấy thông tin phim.')
        }

        responseHandler.ok(res, {
            statusCode: 200,
            message: `Xóa thành công phim có ID: ${filmId}`,
        })
    } catch {
        responseHandler.error(res, 'Xóa phim thất bại')
    }
}

// Lấy danh sách tất cả các phim
const getAllMovies = async (req, res) => {
    try {
        const getMovie = await movieModel.find().sort('-createAt')

        responseHandler.ok(res, getMovie)
    } catch {
        responseHandler.error(res, 'Lấy danh sách phim thất bại.')
    }
}

// Lấy thông tin phim theo ID
const getMovieById = async (req, res) => {
    try {
        const { filmId } = req.params
        try {
            const getMovie = await movieModel.findById(filmId)
            responseHandler.ok(res, getMovie)
        } catch (error) {
            console.log(error)
        }
    } catch {
        responseHandler.error(res, 'Lấy thông tin phim thất bại.')
    }
}

export default { createMovie, deleteMovie, getAllMovies, getMovieById }
