import { Router } from "express";
import authRouter from "./authRouter.js";
import institutionRouter from "./institutionRouter.js";
import articleRouter from "./articleRouter.js";

const router = Router();

router.use(authRouter);
router.use("/institutions", institutionRouter);
router.use(articleRouter)

export default router;