import articleRepository from "../repositories/articleRepository.js";

export async function getInstitutionsByArticles(articleId: number) {
    const data = await articleRepository.getInstitutionsByArticleId(articleId);
    const dataWithoutCreatedAt = excludeCreatedAt(data);
    return dataWithoutCreatedAt;
}

const articleService = {
    getInstitutionsByArticles
}

export default articleService;

function excludeCreatedAt(data) {
    return data.map((obj) => {
        const { createdAt, ...rest } = obj;
        return rest;
    })
}

