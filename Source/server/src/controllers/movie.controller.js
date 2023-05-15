import responseHandler from '../handlers/response.handler.js'
import genreModel from '../models/genre.model.js'
import movieModel from '../models/movie.model.js'

// Tạo mới một bộ phim
const createMovie = async (req, res) => {
    try {
        const {
            title,
            logo,
            duration,
            release_date,
            poster_path,
            overview,
            trailer,
            video,
            genres,
            episodes,
            casts,
            program_type,
            age_rating,
            creators,
            item_genre
        } = req.body
        const checkTitle = await movieModel.findOne({ title })
        if (checkTitle) return responseHandler.badrequest(res, 'Phim đã tồn tại trong hệ thống!')

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

        const castParse = JSON.parse(casts)
        const posterParse = JSON.parse(poster_path)
        const episodesParse = JSON.parse(episodes)
        const programParse = JSON.parse(program_type)
        const creatorsParse = JSON.parse(creators)
        const movie = await new movieModel({
            title,
            logo,
            duration,
            release_date,
            poster_path: posterParse,
            overview,
            trailer,
            video,
            genres: getName,
            episodes: episodesParse,
            casts: castParse,
            program_type: programParse,
            age_rating,
            creators: creatorsParse,
            item_genre,
        })
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

// Lấy danh sách phim theo thể loại
const getMovieByGenre = async (req, res) => {
  try {
    const { genreId } = req.params;

    // Tìm kiếm thể loại trong cơ sở dữ liệu
      const genre = await genreModel.findById(genreId);
    if (!genre) {
      return responseHandler.notfound(res, 'Không tìm thấy thể loại.');
    }

    // Tìm kiếm phim có cùng thể loại
    const movies = await movieModel.findById(genreId).sort('-createAt')
    const listMovie = await movieModel.find().sort('-createAt')

    for (const movie in listMovie) {
        console.log(movie.genres)
    }
    // console.log(getAllMovie[0].title)


    responseHandler.ok(res, movies);
  } catch {
    responseHandler.error(res, 'Lấy danh sách phim theo thể loại thất bại.');
  }
};


export default { createMovie, deleteMovie, getAllMovies, getMovieById, getMovieByGenre }
