import { Request, Response } from "express";
import institutionsService from "../services/institutionService.js";

export async function getInstitutionsList(req: Request, res: Response) {
    const data = await institutionsService.getInstitutionsList();

    res.status(200).send(data);
};

export async function getInstitutionsByCategory (req: Request, res: Response) {
    const {categoryId} = req.params;
    const id = parseInt(categoryId);
    const data = await institutionsService.getInstitutionsByCategory(id);

    res.status(200).send(data);
}