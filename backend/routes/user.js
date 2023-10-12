import { Router } from "express";
import { createUser,getUser,getUsers } from "../controllers/user.js";
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";
// import { idValidation } from "../validators/idValidation.js"
import { userCreateValidator } from "../validators/userValidator.js";
const route = Router();
route.get('/', getUsers);
route.get('/:id', getUser);
route.post("/create", userCreateValidator, ValidatorGeneral, createUser);

export default route;
