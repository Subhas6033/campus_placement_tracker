import Router from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../Services/Auth/auth.controllers.js";
import { authMiddleware } from "../Middlewares/auth.middlewares.js";
import { authLimiter } from "../Middlewares/rateLimit.middlewares.js";

const authRouter = Router();

authRouter
  .post("/signup", authLimiter, registerUser)
  .post("/login", authLimiter, loginUser)
  .post("/logout", authMiddleware, logoutUser);

export default authRouter;
