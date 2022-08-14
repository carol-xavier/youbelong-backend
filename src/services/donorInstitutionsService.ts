import donorInstitutionsRepository from "../repositories/donorInstitutionsRepository.js";

async function updateDonorInstitutions(params: string, institutionId: number, donorId: number) {
    return await donorInstitutionsRepository.updateById(params, institutionId, donorId);
}

const donorInstitutionsService = {
    updateDonorInstitutions
};

export default donorInstitutionsService;