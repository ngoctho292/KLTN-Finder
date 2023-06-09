import express from "express"
import { body } from "express-validator";
import requestHandler from "../handlers/request.handler.js"
import tokenMiddleware from "../middlewares/token.middleware.js"
import castController from "../controllers/cast.controller.js"

const router = express.Router()

router.post(
    "/",
    body("charater")
        .exists()
        .withMessage("character is required")
        .isLength({ min: 1 })
        .withMessage("Độ dài tối thiểu là 1 ký tự"),
    body("profile_path")
        .exists()
        .withMessage("profile_path is required")
        .isLength({ min: 1 })
        .withMessage("Độ dài tối thiểu là 1 ký tự"),
    body("summary")
        .exists()
        .withMessage("summary is required")
        .isLength({ min: 1 })
        .withMessage("Độ dài tối thiểu là 1 ký tự"),
    body("birthYear")
        .exists()
        .withMessage("birthYear is required")
        .isLength({ min: 1 })
        .withMessage("Độ dài tối thiểu là 1 ký tự"),
    tokenMiddleware.auth,
    requestHandler.validate,
    castController.addCast,
);


router.delete(
    "/:castId",
    tokenMiddleware.auth,
    castController.removeCast
)

export default router