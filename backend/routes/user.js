import { Router } from "express";

import {
  createUser,
  auth,
  getUser,
  getUsers,
  editUser,
  deleteUser,
  addFriend,
  deleteFriend,
} from "../controllers/user.js";
import updatePassword from "../controllers/resetPassController.js";
import { resetPassValidator } from "../validators/userValidator.js";
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";
import {
  userCreateValidator,
  AuthValidator,
  edithUserValidator,
} from "../validators/userValidator.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { upload } from "../middleware/multerAvatar.js";
import { postAvatar } from "../controllers/uploadController.js";

const route = Router();

route.get("/", verifyJWT, getUsers);
route.get("/:id", verifyJWT, getUser);
route.post("/create", userCreateValidator, ValidatorGeneral, createUser);
route.post("/auth", AuthValidator, ValidatorGeneral, auth);
route.post("/upload/:id", upload.single("avatar"), postAvatar);
route.delete("/delete/:id", deleteUser);
route.post("/resetpass", resetPassValidator, ValidatorGeneral, updatePassword);
route.patch(
  "/editUser",
  edithUserValidator,
  verifyJWT,
  ValidatorGeneral,
  editUser
);
route.patch("/friend/:id", verifyJWT, addFriend);
route.delete("/friend/:id", verifyJWT, deleteFriend);

export default route;
