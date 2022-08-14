import { Router } from "express";
import {verifyToken} from "./../middlewares/tokenMiddleware.js";
import { updateDonorInstitutions } from "../controllers/donorInstitutionsController.js";

const donorInstitutionsRouter = Router();

donorInstitutionsRouter.post("/donor", verifyToken, updateDonorInstitutions('post'));
donorInstitutionsRouter.delete("/donor", verifyToken, updateDonorInstitutions('delete'));

export default donorInstitutionsRouter;