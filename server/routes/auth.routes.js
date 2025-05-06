import express from "express";
import { loginController, signupController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

// Signup route
authRouter.post("/signup", signupController);

// Login route
authRouter.post("/login", loginController);

export default authRouter;
