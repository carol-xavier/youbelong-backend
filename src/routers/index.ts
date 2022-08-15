import { Router } from "express";
import authRouter from "./authRouter.js";
import institutionRouter from "./institutionRouter.js";
import articleRouter from "./articleRouter.js";
import donorInstitutionsRouter from "./donorInstitutionsRouter.js";

const router = Router();

router.use(authRouter);
router.use(articleRouter);
router.use("/institutions", institutionRouter);
router.use("/donor", donorInstitutionsRouter);

export default router;