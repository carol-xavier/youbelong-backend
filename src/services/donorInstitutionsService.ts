import donorInstitutionsRepository from "../repositories/donorInstitutionsRepository.js";

async function updateDonorInstitutions(params: string, institutionId: number, donorId: number) {
    return await donorInstitutionsRepository.updateById(params, institutionId, donorId);
}

async function getDonorInstitutionList(donorId:number) {
    const institutions = await donorInstitutionsRepository.findDonorInstitutions(donorId);
    const savedInstitutions = handleInstitutionsArrray(institutions);

    return savedInstitutions;
}

const donorInstitutionsService = {
    updateDonorInstitutions,
    getDonorInstitutionList
};

export default donorInstitutionsService;

function handleInstitutionsArrray(institutions) {
    return institutions.map((obj) => obj.institutionId);
}