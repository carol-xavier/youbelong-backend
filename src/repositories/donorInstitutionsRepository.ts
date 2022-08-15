import prisma from "../config/database.js";

async function updateById(params:string, institutionId: number, donorId: number) {
    if (params === 'post') {
        return await prisma.donorsInstitutions.create({
            data: {
                institutionId,
                donorId
            }
        })
    };
    if (params === 'delete') {
        return await prisma.donorsInstitutions.deleteMany({
            where: {
                AND: [
                    { institutionId },
                    { donorId }
                ]
            }
        })
    };
};

async function findDonorInstitutions(donorId: number) {
    return prisma.donorsInstitutions.findMany({
        where: { donorId },
        select: { institutionId: true}
    })
};

const donorInstitutionsRepository = { 
    updateById,
    findDonorInstitutions
};

export default donorInstitutionsRepository;