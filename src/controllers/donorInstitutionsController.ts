import { Request, Response } from "express";
import donorInstitutionsService from "../services/donorInstitutionsService.js";

export async function addDonorInstitutions(req: Request, res: Response) {
    const { institutionId } = req.body;
    const orgId = parseInt(institutionId);
    const { donorId } = res.locals;
    await donorInstitutionsService.addDonorInstitutions(orgId, donorId);

    res.sendStatus(201);
};

export async function deleteDonorInstitutions(req: Request, res: Response) {
    const { institutionId } = req.params;
    const orgId = parseInt(institutionId);
    const { donorId } = res.locals;
    await donorInstitutionsService.deleteDonorInstitutions(orgId, donorId);

    res.sendStatus(201);
}

export async function getDonorInstitutionList(req: Request, res: Response) {
    const { donorId } = res.locals;
    const data = await donorInstitutionsService.getDonorInstitutionList(donorId);

    res.status(200).send(data);
};

