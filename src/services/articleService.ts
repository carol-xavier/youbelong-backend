import articleRepository from "../repositories/articleRepository.js";
import { CreateInstitutionArticlesData } from "../utils/types.js";

export async function getInstitutionsByArticles(articleId: number) {
    const data = await articleRepository.getInstitutionsByArticleId(articleId);
    const dataWithoutCreatedAt = excludeCreatedAt(data);
    return dataWithoutCreatedAt;
};

export async function postInstitutionArticles(institutionArticles: CreateInstitutionArticlesData) {
    const { institutionId } = institutionArticles;
    const { articleIds } = institutionArticles;
    const response = articleIds.map(async (id) => {
        return await articleRepository.postInstitutionArticle(id, institutionId)
    });
    await Promise.all(response);
    return response;
};

const articleService = {
    getInstitutionsByArticles,
    postInstitutionArticles
};

export default articleService;

function excludeCreatedAt(data) {
    return data.map((obj) => {
        const { createdAt, ...rest } = obj;
        return rest;
    })
};