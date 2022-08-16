import prisma from '../config/database.js';
import { Institution } from '@prisma/client';
import { CreateInstitutionData } from "../utils/types.js";

// export async function postNewInstitution(institution: CreateInstitutionData) {
//         const promise = await prisma.institution.create({
//             data: institution
//         }).then((successResponse) => {
//             if (successResponse) {
//                 return promise;
//               } else {
//                 throw { type: "conflict" };
//               }
//         });
// };
export async function postNewInstitution(institution: CreateInstitutionData) {
    try {
        const data = await prisma.institution.create({
            data: institution
        })
        return data;   
    } catch (error) {
        throw { type: "conflict", message: error };
    }
};

export async function getInstitutionsList() {
    const data = await prisma.institution.findMany();
    return data;
}

export async function getInstitutionsByCategory(categoryId: number) {
    const data = await prisma.institution.findMany({
        where: { categoryId }
    })
    return data;
}

const institutionsRepository = {
    postNewInstitution,
    getInstitutionsList,
    getInstitutionsByCategory
}

export default institutionsRepository;