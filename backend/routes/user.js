import { Router } from "express";

const route = Router();

route.get("/user", (req, res) => {
  res.send("hola mundo");
});

export default route;
