import { Donor } from "@prisma/client";
import jwt from 'jsonwebtoken';

export async function createToken(user: Donor) {
    const secretKey = process.env.JWT_SECRET;
    const session = { email: user.email, userId: user.id };
    const setting = { expiresIn: 60 * 60 * 5 };

    const token = jwt.sign(session, secretKey, setting);

    return token;
};