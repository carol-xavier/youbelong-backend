import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { institutionArticlesSchema } from "../schemas/institutionArticlesSchema.js";
import { 
    postInstitutionArticles,
    getInstitutionsByArticles 
} from '../controllers/articleController.js';

const articleRouter = Router();

articleRouter.get("/:articleId", getInstitutionsByArticles);
articleRouter.post("/", validateSchemaMiddleware(institutionArticlesSchema), postInstitutionArticles);

export default articleRouter;