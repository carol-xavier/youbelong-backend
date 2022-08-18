import articleRepository from "../repositories/articleRepository.js";
import { CreateInstitutionArticlesData } from "../utils/types.js";

export async function getInstitutionsByArticles(articleId: number) {
    const data = await articleRepository.getInstitutionsByArticleId(articleId);
    const dataExtracted = extractData(data);
    const dataWithoutCreatedAt = excludeCreatedAt(dataExtracted);
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

function extractData(data) {
    return data.map((obj) =>  obj.institution);
};

function excludeCreatedAt(data) {
    return data.map((obj) => {
        const { createdAt, ...rest } = obj;
        return rest;
    })
};