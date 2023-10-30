import { Router } from "express";
import routerUser from "./user.js";
import routerTeam from "./teamRoute.js";
import routerCategory from "./category.js";
const route = Router();

route.use("/user", routerUser);
route.use("/team", routerTeam);
route.use("/category", routerCategory);

export default route;
