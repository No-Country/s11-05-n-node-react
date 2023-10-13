import { Router } from "express";
import { createUser,Auth,getUser, getUsers } from "../controllers/user.js";
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";
import { userCreateValidator,AuthValidator } from "../validators/userValidator.js";
const route = Router();
route.get('/', getUsers);
route.get('/:id', getUser);
route.post("/create", userCreateValidator, ValidatorGeneral, createUser);
route.post("/auth", AuthValidator, ValidatorGeneral, Auth);

export default route;
