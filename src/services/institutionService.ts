import { CreateInstitutionData } from "../utils/types.js";
import institutionsRepository from "../repositories/institutionRepository.js";

export async function postNewInstitution(institution: CreateInstitutionData) {
    return await institutionsRepository.postNewInstitution(institution);
};

export async function getInstitutionsList() {
    return await institutionsRepository.getInstitutionsList();
};

export async function getInstitutionsByCategory(categoryId: number) {
    return await institutionsRepository.getInstitutionsByCategory(categoryId);
};

const institutionsService = {
    postNewInstitution,
    getInstitutionsList,
    getInstitutionsByCategory
}

export default institutionsService;