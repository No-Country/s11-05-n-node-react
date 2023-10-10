import { Router } from "express";
import { createUser } from "../controllers/user.js";
import { validateResult } from "../middleware/validatorGeneral.js";
import { userValidator } from "../validators/userValidator.js";
const route = Router();

route.post("/create", userValidator, validateResult, createUser);

export default route;
