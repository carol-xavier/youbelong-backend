import institutionsRepository from "../repositories/institutionRepository.js";

export async function getInstitutionsList() {
    return await institutionsRepository.getInstitutionsList();
}

export async function getInstitutionsByCategory(categoryId: number) {
    return await institutionsRepository.getInstitutionsByCategory(categoryId);
}

const institutionsService = {
    getInstitutionsList,
    getInstitutionsByCategory
}

export default institutionsService;