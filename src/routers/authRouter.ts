import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { signupSchema } from "../schemas/authSchema.js";
import { donorSignUp } from "../controllers/authController.js";
const authRouter = Router();

authRouter.post("/sign-up", validateSchemaMiddleware(signupSchema), donorSignUp);
// authRouter.post("/sign-in", validateSchemaMiddleware(signinSchema), donorSignIn);

export default authRouter;