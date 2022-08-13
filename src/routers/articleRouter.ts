import { Router } from "express";
import { getInstitutionsByArticles } from '../controllers/articleController.js';

const articleRouter = Router();

articleRouter.use("/articles/:articleId", getInstitutionsByArticles);

export default articleRouter;