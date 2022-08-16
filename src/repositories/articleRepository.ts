import prisma from "../config/database.js";

export async function getInstitutionsByArticleId(articleId:number) {
    const data = await prisma.institutionArticles.findMany({
        where: { articleId },
        select: { institution: true }
    });

    return data;
}

export async function postInstitutionArticle(institutionId:number, articleId:number) {
    try {
        const promise = await prisma.institutionArticles.create({
            data: {
                institutionId,
                articleId
            }
        });
        return promise;
    } catch (error) {
        throw { type: "conflict", message: error };
    }
}

const articleRepository = {
    getInstitutionsByArticleId,
    postInstitutionArticle
};

export default articleRepository;