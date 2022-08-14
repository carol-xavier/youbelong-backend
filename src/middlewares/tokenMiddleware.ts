import { Request, Response, NextFunction } from "express";
import { Donor } from "@prisma/client";
import jwt from 'jsonwebtoken';

export async function createToken(user: Donor) {
    const secretKey = process.env.JWT_SECRET;
    const session = { email: user.email, donorId: user.id };
    const setting = { expiresIn: 60 * 60 * 5 };

    const token = jwt.sign(session, secretKey, setting);

    return token;
};

export async function verifyToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const secretKey = process.env.JWT_SECRET;
    const token = authorization?.replace("Bearer", "").trim();

    await jwt.verify(token, secretKey, (err, session) => {
        if(err) return res.status(401).send('Invalid token');
        const { donorId } = session;
        res.locals.donorId = donorId;
    });

    next();
};
