import { Request, Response } from "express";
import { CreateInstitutionArticlesData } from "../utils/types.js";
import articleService from "../services/articleService.js";

export async function getInstitutionsByArticles(req: Request, res: Response) {
    const { articleId } = req.params;
    const id = parseInt(articleId);
    const data = await articleService.getInstitutionsByArticles(id);

    res.status(201).send(data);
}

export async function postInstitutionArticles(req: Request, res: Response) {
    const institutionArticles: CreateInstitutionArticlesData = req.body;
    await articleService.postInstitutionArticles(institutionArticles);

    res.sendStatus(201);
}