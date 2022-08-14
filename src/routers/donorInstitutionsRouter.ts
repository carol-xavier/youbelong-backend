import { Router } from "express";
import {verifyToken} from "./../middlewares/tokenMiddleware.js";
import { updateDonorInstitutions } from "../controllers/donorInstitutionsController.js";

const donorInstitutionsRouter = Router();

donorInstitutionsRouter.put("/donor", verifyToken, updateDonorInstitutions);

export default donorInstitutionsRouter;