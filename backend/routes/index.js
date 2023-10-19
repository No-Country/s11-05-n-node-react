import { Router } from "express";
import routerUser from "./user.js";
import routerTeam from "./user.js";

const route = Router();

route.use("/user", routerUser);
route.use("/team", routerTeam);

export default route;
