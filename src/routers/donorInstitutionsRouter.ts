import { Router } from "express";
import {verifyToken} from "./../middlewares/tokenMiddleware.js";
import { 
    addDonorInstitutions,
    deleteDonorInstitutions,
    getDonorInstitutionList
} from "../controllers/donorInstitutionsController.js";

const donorInstitutionsRouter = Router();

donorInstitutionsRouter.post("/", verifyToken, addDonorInstitutions);
donorInstitutionsRouter.delete("/:institutionId", verifyToken, deleteDonorInstitutions);
donorInstitutionsRouter.get("/", verifyToken, getDonorInstitutionList)

export default donorInstitutionsRouter;