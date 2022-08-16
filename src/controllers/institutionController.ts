import { Request, Response } from "express";
import { CreateInstitutionData } from "../utils/types.js";
import institutionsService from "../services/institutionService.js";


export async function postNewInstitution(req: Request, res: Response) {
    const institution: CreateInstitutionData = req.body;
    await institutionsService.postNewInstitution(institution);

    res.sendStatus(201);
};

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