import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import morgan from "morgan";
import { initDBConnection } from "./db/db.js";
import { development } from "./config/config.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = development[process.env.NODE_ENV].port;

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
