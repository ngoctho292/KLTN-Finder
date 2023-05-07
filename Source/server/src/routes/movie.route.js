import express from 'express'
import { body } from 'express-validator'
import tokenMiddleware from '../middlewares/token.middleware.js'
import requestHandler from '../handlers/request.handler.js'
import movieController from '../controllers/movie.controller.js'
import authorizeMiddleware from '../middlewares/authorize.middleware.js'

const router = express.Router()

// http://localhost:5000/api/v1/movies/
router.get('/', movieController.getAllMovies)

// http://localhost:5000/api/v1/movies/6446aaa86d3e062a1e82b241
router.get('/:filmId', movieController.getMovieById)

router.post(
    '/',
    body('type')
        .exists()
        .withMessage('type is required')
        .custom((type) => ['tv', 'movie'].includes(type))
        .withMessage('type invalid'),
    // body("filmId")
    //     .exists()
    //     .withMessage("filmId là bắt buộc!")
    //     .isLength({ min: 1 })
    //     .withMessage("filmId không được trống!"),
    body('title')
        .exists()
        .withMessage('title là bắt buộc!')
        .isLength({ min: 1 })
        .withMessage('title không được trống!'),
    body('overview').exists().withMessage('overview is required'),
    body('poster_path').exists().withMessage('poster_path is required'),
    body('release_date').exists().withMessage('release_date is required'),
    body('status').exists().withMessage('status is required'),
    body('vote_average').exists().withMessage('vote_average is required'),
    body('genres').exists().withMessage('genres is required'),
    body('backdrop_path').exists().withMessage('backdrop_path is required'),
    body('trailer').exists().withMessage('trailer is required'),
    body('video').exists().withMessage('video is required'),
    body('runtime').exists().withMessage('runtime is required'),
    body('cast').exists().withMessage('cast is required'),
    tokenMiddleware.auth,
    authorizeMiddleware.allowAdminOnly,
    requestHandler.validate,
    movieController.createMovie,
)

router.delete('/:filmId', tokenMiddleware.auth, authorizeMiddleware.allowAdminOnly, movieController.deleteMovie)

export default router
