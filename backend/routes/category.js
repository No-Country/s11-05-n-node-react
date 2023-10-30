import { Router } from "express";
import { getCategorie, getCategories } from "../controllers/category.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
const route = Router();

route.get("/", verifyJWT, getCategories);
route.get("/:categoryId", verifyJWT, getCategorie);

export default route;
