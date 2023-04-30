import express from "express"
import tokenMiddleware from "../middlewares/token.middleware.js";
import requestHandler from "../handlers/request.handler.js";

const router = express.Router()

router.post(
    "/token",
    requestHandler.validate,
    tokenMiddleware.tokenGlobal,
)


export default router
