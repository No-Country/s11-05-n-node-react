import { Router } from "express";
import routerUser from "./user.js";

const route = Router();

route.use("/user", routerUser);

export default route;
