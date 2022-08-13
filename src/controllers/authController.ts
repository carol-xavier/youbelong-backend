import { Request, Response } from "express";
import { CreateDonorData, DonorData } from "../utils/types.js";
import authService from "../services/authService.js";

export async function donorSignUp(req: Request, res: Response) {
    const data: CreateDonorData = req.body;
    const donor = await authService.createDonor(data);
    await authService.insert(donor);

    res.sendStatus(201);
};

export async function donorSignIn(req: Request, res: Response) {
    const data: DonorData = req.body;
    const donorData = await authService.login(data);

    return res.status(201).send(donorData);
};