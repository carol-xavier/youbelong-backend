import { CreateDonorData } from "../utils/types.js";
import authRepository from './../repositories/authRepository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function createDonor (data: CreateDonorData) {
    const verifyEmail = await authRepository.findDonorByEmail(data.email);
    if (verifyEmail) throw { type: "conflict" };

    const passwordHash = bcrypt.hashSync(data.password, 10);
    const donor = { ...data, password: passwordHash };

    return donor;
};

async function insert(donor: CreateDonorData) {
    await authRepository.insertDonor(donor);
};

const authService = {
    createDonor,
    insert
}

export default authService;