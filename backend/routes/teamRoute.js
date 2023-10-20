import { Router } from "express";

import { createTeam } from "../controllers/team.js";
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { teamValidator } from "../validators/teamValidator.js";
const route = Router();



route.post("/createTeam", teamValidator,verifyJWT,  ValidatorGeneral, createTeam);



export default route;
