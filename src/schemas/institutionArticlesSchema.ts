import Joi from "joi";
import {CreateInstitutionArticlesData} from "../utils/types.js";

export const institutionArticlesSchema = Joi.object<CreateInstitutionArticlesData>({
    institutionId: Joi.number().required(),
    articleIds: Joi.array().min(1).max(4).required()
});