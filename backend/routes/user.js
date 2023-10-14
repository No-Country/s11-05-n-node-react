import { Router } from "express";

import { createUser,auth,getUser, getUsers, edithUser, deleteUser } from "../controllers/user.js";
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";
import { userCreateValidator,AuthValidator, edithUserValidator } from "../validators/userValidator.js";
const route = Router();

route.get('/', getUsers);
route.get('/:id', getUser);
route.post("/create", userCreateValidator, ValidatorGeneral, createUser);
route.post("/auth", AuthValidator, ValidatorGeneral, auth);

route.delete("/delete/:id", deleteUser )
route.patch("/edithUser", edithUserValidator,  ValidatorGeneral, edithUser);



export default route;
