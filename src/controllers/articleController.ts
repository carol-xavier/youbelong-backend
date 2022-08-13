import { Request, Response } from "express";
import articleService from "../services/articleService.js";

export async function getInstitutionsByArticles(req: Request, res: Response) {
    const { articleId } = req.params;
    const id = parseInt(articleId);
    const data = await articleService.getInstitutionsByArticles(id);

    res.status(200).send(data);
}