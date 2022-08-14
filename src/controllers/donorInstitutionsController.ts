import { Request, Response } from "express";
import donorInstitutionsService from "../services/donorInstitutionsService.js";

export function updateDonorInstitutions(params:string) {

    return async function(req: Request, res: Response) {
        const { institutionId } = req.body;
        const orgId = parseInt(institutionId);
        const { donorId } = res.locals;
        await donorInstitutionsService.updateDonorInstitutions(params, orgId, donorId);
    
        res.sendStatus(201);
    }
}

