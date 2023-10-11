import { Router } from "express";
import { createUser } from "../controllers/user.js";
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";
import { userCreateValidator } from "../validators/userValidator.js";
const route = Router();

route.post("/create", userCreateValidator, ValidatorGeneral, createUser);

export default route;
