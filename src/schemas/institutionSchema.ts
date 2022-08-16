import Joi from "joi";
import { CreateInstitutionData } from "../utils/types.js";

export const institutionSchema = Joi.object<CreateInstitutionData>({
    name: Joi.string().required(),
    description: Joi.string().required().required(),
    values: Joi.string(),
    mission: Joi.string(),
    picture: Joi.string().uri(),
    video: Joi.string().uri(),
    contact: Joi.string().min(10).max(11).required(),
    categoryId: Joi.number().max(4).required()
});