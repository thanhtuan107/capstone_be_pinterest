import express from 'express';
import authController from '../controllers/auth.controller.js';
import protect from '../common/middleware/protect.middleware.js';
const authRouter = express.Router();

// Tạo route CRUD
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post("/refresh-token", authController.refreshToken);
authRouter.get("/get-info", protect,authController.getInfo);



export default authRouter;