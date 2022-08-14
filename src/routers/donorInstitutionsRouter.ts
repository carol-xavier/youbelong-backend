import { Router } from "express";
import {verifyToken} from "./../middlewares/tokenMiddleware.js";

const donorInstitutionsRouter = Router();
donorInstitutionsRouter.use(verifyToken);

export default donorInstitutionsRouter;