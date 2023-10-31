import { Router } from "express";
import routerUser from "./user.js";
import routerTeam from "./teamRoute.js";
import routerCategory from "./category.js";
import routerMatch from "./match.js";
const route = Router();

route.use("/user", routerUser);
route.use("/team", routerTeam);
route.use("/category", routerCategory);
route.use("/match", routerMatch);

export default route;
