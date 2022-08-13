import prisma from '../config/database.js';

export async function getInstitutionsList() {
    const data = await prisma.institution.findMany();
    return data;
}

export async function getInstitutionsByCategory(categoryId:number) {
    const data = await prisma.institution.findMany({
        where: {categoryId}
    })
    return data;
}

const institutionsRepository= {
    getInstitutionsList,
    getInstitutionsByCategory
}

export default institutionsRepository;