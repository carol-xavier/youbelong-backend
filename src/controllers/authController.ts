import { Request, Response } from "express";
import { CreateDonorData } from "../utils/types.js";
import authService from "../services/authService.js";

export async function donorSignUp(req: Request, res: Response) {
    const data: CreateDonorData = req.body;
    const donor = await authService.createDonor(data);
    await authService.insert(donor);

    res.sendStatus(201);
};

