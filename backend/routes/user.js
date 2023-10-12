import { Router } from "express";
import { createUser,Auth, deleteUser } from "../controllers/user.js";
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";
import { userCreateValidator,AuthValidator } from "../validators/userValidator.js";
const route = Router();

route.post("/create", userCreateValidator, ValidatorGeneral, createUser);
route.post("/auth", AuthValidator, ValidatorGeneral, Auth);
route.delete("/delete/:id", deleteUser )


export default route;
