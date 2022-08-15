import prisma from "../config/database.js";

async function addById(institutionId: number, donorId: number) {
    return await prisma.donorsInstitutions.create({
        data: {
            institutionId,
            donorId
        }
    })
};

async function deleteById(institutionId: number, donorId: number) {
    return await prisma.donorsInstitutions.deleteMany({
        where: {
            AND: [
                { institutionId },
                { donorId }
            ]
        }
    })
};

async function findDonorInstitutions(donorId: number) {
    return prisma.donorsInstitutions.findMany({
        where: { donorId },
        select: { institution: true }
    })
};

const donorInstitutionsRepository = {
    addById,
    deleteById,
    findDonorInstitutions
};

export default donorInstitutionsRepository;