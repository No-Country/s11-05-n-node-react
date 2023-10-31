import { Router } from "express";
import { getAllMatches, createMatch, getMatchById, updateMatch, deleteMatch } from "../controllers/match.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
const route = Router();

route.get("/getAllMatches", verifyJWT, getAllMatches);
route.post("/createMatch", verifyJWT, createMatch);
route.get("/getMatchById", verifyJWT, getMatchById);
route.patch("/updateMatch", verifyJWT, updateMatch);
route.delete("/deleteMatch", verifyJWT, deleteMatch);


export default route;
