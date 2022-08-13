import prisma from "../config/database.js";

export async function getInstitutionsByArticleId(articleId:number) {
    const data = await prisma.institutionArticles.findMany({
        where: { articleId },
        select: { institution: true }
    });

    return data;
}

const articleRepository = {
    getInstitutionsByArticleId
};

export default articleRepository;