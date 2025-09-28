import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../common/swagger/init.swagger.js";
import authRouter from "./auth.router.js";
import photoRouter from "./photo.router.js";
import userRouter from "./user.router.js";
import likeRouter from "./like.router.js";
import commentRouter from "./comment.router.js";

const rootRouter = express.Router();
rootRouter.use("/api-docs", swaggerUi.serve);
rootRouter.get("/api-docs", swaggerUi.setup(swaggerDocument, { swaggerOptions: { persistAuthorization: true } }));
rootRouter.use('/auth', authRouter)
rootRouter.use('/photo' , photoRouter)
rootRouter.use('/user', userRouter)
rootRouter.use('/like', likeRouter)
rootRouter.use('/comment', commentRouter)

export default rootRouter