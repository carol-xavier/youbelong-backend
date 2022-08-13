import { Router } from "express";
// import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import {
    getInstitutionsList,
    getInstitutionsByCategory
} from "./../controllers/institutionController.js";

const institutionRouter = Router();

// institutionRouter.post("/institutions");
institutionRouter.get("/institutions", getInstitutionsList);
institutionRouter.get("/institutions/:categoryId", getInstitutionsByCategory);

export default institutionRouter;

