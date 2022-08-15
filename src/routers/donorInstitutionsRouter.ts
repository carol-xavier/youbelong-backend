import { Router } from "express";
import {verifyToken} from "./../middlewares/tokenMiddleware.js";
import { 
    updateDonorInstitutions,
    getDonorInstitutionList
} from "../controllers/donorInstitutionsController.js";

const donorInstitutionsRouter = Router();

donorInstitutionsRouter.post("/", verifyToken, updateDonorInstitutions('post'));
donorInstitutionsRouter.delete("/", verifyToken, updateDonorInstitutions('delete'));
donorInstitutionsRouter.get("/", verifyToken, getDonorInstitutionList)

export default donorInstitutionsRouter;