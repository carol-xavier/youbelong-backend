import { CreateDonorData, DonorData } from "../utils/types.js";
import authRepository from './../repositories/authRepository.js';
import { createToken } from "../middlewares/tokenMiddleware.js";
import bcrypt from 'bcrypt';

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

async function login(data: DonorData) {
    const user = await authRepository.findDonorByEmail(data.email);
    const passwordValidation = bcrypt.compareSync(data.password, user.password);
    if (!passwordValidation) throw { type: "unauthorized" };

    const token = await createToken(user);
    const donorData = {
        name: user.name,
        email: user.email,
        token
    };
    return donorData;
}

const authService = {
    createDonor,
    insert,
    login
}

export default authService;