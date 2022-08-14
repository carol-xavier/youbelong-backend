import donorInstitutionsRepository from "../repositories/donorInstitutionsRepository.js";

async function updateDonorInstitutions(institutionId: number, donorId: number) {
    return await donorInstitutionsRepository.updateById(institutionId, donorId);
};

const donorInstitutionsService = {
    updateDonorInstitutions
};

export default donorInstitutionsService;