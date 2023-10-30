import { Router } from "express";
import { getCategorie, getCategories } from "../controllers/category.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
const route = Router();

route.get("/", verifyJWT, getCategorie);
route.get("/:categoryId", verifyJWT, getCategories);

export default route;
