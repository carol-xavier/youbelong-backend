import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { institutionSchema } from "../schemas/institutionSchema.js";
import {
    postNewInstitution,
    getInstitutionsList,
    getInstitutionsByCategory
} from "./../controllers/institutionController.js";

const institutionRouter = Router();

institutionRouter.post("/", validateSchemaMiddleware(institutionSchema), postNewInstitution);
institutionRouter.get("/", getInstitutionsList);
institutionRouter.get("/:categoryId", getInstitutionsByCategory);

export default institutionRouter;

