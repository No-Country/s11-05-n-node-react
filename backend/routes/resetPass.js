import { Router } from "express";
import updatePassword from "../controllers/resetPassController.js";

const resetPass = Router();
resetPass.post("/resetpass", updatePassword);

export default resetPass;
