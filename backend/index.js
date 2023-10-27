import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import morgan from "morgan";
import { initDBConnection } from "./db/db.js";
import { config } from "./config/config.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.port;

//config
app.use(express.static("public"));
app.use(express.json());
//seguridad
app.use(cors("*"));
//middleware
app.use(morgan("dev"));
//routes
app.use(router);
//listening
app.listen(port, () => {
  initDBConnection();
  console.log(`Server runing on port: ${port}`);
});
