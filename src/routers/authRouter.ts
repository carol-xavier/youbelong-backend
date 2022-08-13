import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { signupSchema, signinSchema } from "../schemas/authSchema.js";
import { donorSignUp, donorSignIn } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchemaMiddleware(signupSchema), donorSignUp);
authRouter.post("/sign-in", validateSchemaMiddleware(signinSchema), donorSignIn);

export default authRouter;