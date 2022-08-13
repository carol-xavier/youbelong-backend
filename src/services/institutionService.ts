import institutionsRepository from "../repositories/institutionRepository.js";

export async function getInstitutionsList() {
    const data = await institutionsRepository.getInstitutionsList();
    return data;
}

export async function getInstitutionsByCategory(categoryId: number) {
    const data = await institutionsRepository.getInstitutionsByCategory(categoryId);
    const dataWithoutCreatedAt = excludeCreatedAt(data);
    return dataWithoutCreatedAt;
}

const institutionsService = {
    getInstitutionsList,
    getInstitutionsByCategory
}

export default institutionsService;

function excludeCreatedAt(data) {
    return data.map((obj) => {
        const { createdAt, ...rest } = obj;
        return rest;
    })
}