import donorInstitutionsRepository from "../repositories/donorInstitutionsRepository.js";

async function addDonorInstitutions(institutionId: number, donorId: number) {
    return await donorInstitutionsRepository.addById(institutionId, donorId);
}

async function deleteDonorInstitutions(institutionId: number, donorId: number) {
    return await donorInstitutionsRepository.deleteById(institutionId, donorId);
}

async function getDonorInstitutionList(donorId: number) {
    const institutions = await donorInstitutionsRepository.findDonorInstitutions(donorId);
    const institutionList = getArray(institutions);
    return institutionList;
}

const donorInstitutionsService = {
    addDonorInstitutions,
    deleteDonorInstitutions,
    getDonorInstitutionList
};

export default donorInstitutionsService;

function getArray(data) {
    return data.map((obj) => { return obj.institution })
}