import { Router } from "express";
import { createUser,Auth,getUser, getUsers, edithUser } from "../controllers/user.js";
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";
import { userCreateValidator,AuthValidator, edithUserValidator } from "../validators/userValidator.js";
const route = Router();

route.get('/', getUsers);
route.get('/:id', getUser);
route.post("/create", userCreateValidator, ValidatorGeneral, createUser);
route.post("/auth", AuthValidator, ValidatorGeneral, Auth);
route.patch("/edithUser", edithUserValidator,  ValidatorGeneral, edithUser);


export default route;
