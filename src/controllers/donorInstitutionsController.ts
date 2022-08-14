import { Request, Response } from "express";
import donorInstitutionsService from "../services/donorInstitutionsService.js";

export async function updateDonorInstitutions(req: Request, res: Response) {
    const { institutionId } = req.body;
    const orgId = parseInt(institutionId);
    const { donorId } = res.locals;
    await donorInstitutionsService.updateDonorInstitutions(orgId, donorId);

    res.sendStatus(201);
};