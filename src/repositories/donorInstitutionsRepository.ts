import prisma from "../config/database.js";

async function updateById(institutionId: number, donorId: number) {
    return await prisma.donorsInstitutions.create({
        data: {
            institutionId,
            donorId
        }
    });
}

const donorInstitutionsRepository = {
    updateById
};

export default donorInstitutionsRepository;