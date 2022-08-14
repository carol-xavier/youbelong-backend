import prisma from '../config/database.js';
import { CreateDonorData } from '../utils/types.js';

async function findDonorByEmail(email: string) {
    return prisma.donor.findUnique({
        where: {
            email,
        },
    });
};

async function findDonorInstitutions(donorId: number) {
    return prisma.donorsInstitutions.findMany({
        where: { donorId },
        select: { institutionId: true}
    })
};

async function insertDonor(donor: CreateDonorData) {
    return prisma.donor.create({
        data: donor,
    });
};

const authRepository = {
    findDonorByEmail,
    findDonorInstitutions,
    insertDonor
}

export default authRepository;