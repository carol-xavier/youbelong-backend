import prisma from '../config/database.js';
import { CreateDonorData } from '../utils/types.js';

async function findDonorByEmail(email: string) {
    return prisma.donor.findUnique({
        where: {
            email,
        },
    });
};

async function insertDonor(donor: CreateDonorData) {
    return prisma.donor.create({
        data: donor
    });
};

const authRepository = {
    findDonorByEmail,
    insertDonor
}

export default authRepository;