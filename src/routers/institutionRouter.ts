import { Router } from "express";
// import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import {
    getInstitutionsList,
    getInstitutionsByCategory
} from "./../controllers/institutionController.js";

const institutionRouter = Router();

// institutionRouter.post("/institutions");
institutionRouter.get("/", getInstitutionsList);
institutionRouter.get("/:categoryId", getInstitutionsByCategory);

export default institutionRouter;

