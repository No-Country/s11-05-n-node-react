import { Router } from "express";
import {
  getTeam,
  getTeams,
  createTeam,
  getUserTeams,
  changeTeam,
  deleteTeam,
  getMyteams,
  addPlayer,
} from "../controllers/team.js";
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
import {
  teamValidator,
  getTeamValidator,
  teamDeleteValidator,
} from "../validators/teamValidator.js";

const route = Router();

route.get("/", verifyJWT, getTeams);
route.get("/getMyteams", verifyJWT, getMyteams);
route.patch("/addPlayer/:id", verifyJWT, addPlayer);
route.get("/me", verifyJWT, getUserTeams);
route.get("/:id", verifyJWT, getTeamValidator, ValidatorGeneral, getTeam);
route.post(
  "/createTeam",
  teamValidator,
  verifyJWT,
  ValidatorGeneral,
  createTeam
);
route.put("/:id", teamValidator,verifyJWT,  ValidatorGeneral, changeTeam);
route.delete(
  "/deletTeam/:id",
  verifyJWT,
  teamDeleteValidator,
  ValidatorGeneral,
  deleteTeam
);

export default route;
