import express from 'express'
import { body } from 'express-validator'
import userController from "../controllers/user.controller.js"
import favoriteController from "../controllers/favorite.controller.js"
import requestHandler from "../handlers/request.handler.js"
import userModel from "../models/user.model.js"
import tokenMiddleware from "../middlewares/token.middleware.js"
const router = express.Router()

router.post(
    '/signup',
    body('username').exists().withMessage('Tên người dùng là bắt buộc!').isLength({ min: 4 }).withMessage('Tài khoản tối thiểu 4 ký tự trở lên!').custom(async value => {
        const user = await userModel.findOne({ username: value })
        if(user) return Promise.reject({ statusCode: 400, message: "Tài khoản này đã được sử dụng." });
    }),
    body('password').exists().withMessage('Mật khẩu là bắt buộc!').isLength({ min: 8 }).withMessage('Mật khẩu tối thiểu từ 8 ký tự'),
    body('confirmPassword').exists().withMessage('Xác nhận mật khẩu là bắt buộc').isLength({ min: 8 }).withMessage('Xác nhận mật khẩu từ 8 ký tự trở lên').custom((value, { req }) => {
        if (value !== req.body.password) throw new Error('Xác nhận mật khẩu không đúng, vui lòng thử lại!')
        return true
    }),
    body('displayName').exists().withMessage('Tên hiển thị là bắt buộc').isLength({ min: 2 }).withMessage('Tên hiển thị phải từ 2 ký tự trở lên'),
    requestHandler.validate,
    userController.signup
)

router.post(
    '/signin',
    body('username').exists().withMessage('username is required').isLength({ min: 4 }).withMessage('username minimum 4 characters'),
    body('password').exists().withMessage("password is required").isLength({ min: 8 }).withMessage("password minimum 8 characters"),
    requestHandler.validate,
    userController.signin
)

router.put(
    "/update-password",
    tokenMiddleware.auth,
    body("password")
        .exists()
        .withMessage("password is required")
        .isLength({ min: 8 })
        .withMessage("password minimum 8 characters"),
    body("newPassword")
        .exists()
        .withMessage("newPassword is required")
        .isLength({ min: 8 })
        .withMessage("password minimum 8 characters"),
    body("confirmNewPassword")
        .exists()
        .withMessage("confirmNewPassword is required")
        .isLength({ min: 8 })
        .withMessage("confirmNewPassword minimum 8 characters")
        .custom((value, { req }) => {
            if (value !== req.body.newPassword) throw new Error("confirmNewPassword not match");
            return true;
        }),
    requestHandler.validate,
    userController.updatePassword,
);

router.get(
    '/info',
    tokenMiddleware.auth,
    userController.getInfo
)

router.post(
    '/info/:userId',
    tokenMiddleware.auth,
    userController.getUserById
)

router.get(
    '/favorites',
    tokenMiddleware.auth,
    favoriteController.getFavoritesOfUser
)

router.post(
  "/favorites",
  tokenMiddleware.auth,
  body("mediaType")
    .exists().withMessage("mediaType is required")
    .custom(type => ["movie", "tv"].includes(type)).withMessage("mediaType invalid"),
  body("mediaId")
    .exists().withMessage("mediaId is required")
    .isLength({ min: 1 }).withMessage("mediaId can not be empty"),
  body("mediaTitle")
    .exists().withMessage("mediaTitle is required"),
  body("mediaPoster")
    .exists().withMessage("mediaPoster is required"),
  body("mediaRate")
    .exists().withMessage("mediaRate is required"),
  requestHandler.validate,
  favoriteController.addFavorite
);

router.delete(
  "/favorites/:favoriteId",
  tokenMiddleware.auth,
  favoriteController.removeFavorite
);

export default router
