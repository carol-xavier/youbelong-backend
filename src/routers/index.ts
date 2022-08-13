import { Router } from "express";
import authRouter from "./authRouter.js";
import institutionRouter from "./institutionRouter.js";

const router = Router();

router.use(authRouter);
router.use(institutionRouter);

export default router;