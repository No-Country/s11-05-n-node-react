import { Router } from "express";

import { getTeam,getTeams } from "../controllers/team.js";
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";
import { getTeamValidator } from "../validators/teamValidator.js";
const route = Router();

route.get('/', getTeams);
route.get('/:id',getTeamValidator ,ValidatorGeneral ,getTeam);


export default route;