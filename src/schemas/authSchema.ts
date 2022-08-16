import Joi from "joi";
import { CreateDonorData } from "./../utils/types.js";

export const signupSchema = Joi.object<CreateDonorData>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(7).required(),
});

export const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(7).required()
});