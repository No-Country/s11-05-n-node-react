import { Router } from "express";

import { createUser,auth,getUser, getUsers, editUser, deleteUser } from "../controllers/user.js";
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";
import { userCreateValidator,AuthValidator, edithUserValidator } from "../validators/userValidator.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { upload } from "../middleware/multerAvatar.js";
import { postAvatar } from "../controllers/uploadController.js"

const route = Router();

route.get('/', getUsers);
route.get('/:id', getUser);
route.post("/create", userCreateValidator, ValidatorGeneral, createUser);
route.post("/auth", AuthValidator, ValidatorGeneral, auth);

route.delete("/delete/:id", deleteUser )
route.patch("/editUser", edithUserValidator,verifyJWT,  ValidatorGeneral, editUser);
route.post('/upload/:id', upload.single('avatar'), postAvatar );


export default route;
