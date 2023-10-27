import { Router } from "express";
import updatePassword from "../controllers/resetPassController.js";
import {resetPassValidator} from "../validators/userValidator.js"
import { ValidatorGeneral } from "../middleware/validatorGeneral.js";

const resetPass = Router();
resetPass.post("/user/resetpass", resetPassValidator, ValidatorGeneral, updatePassword);

export default resetPass;
