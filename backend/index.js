import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
import morgan from "morgan";
dotenv.config();
const app = express();
const port = 3000;

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
console.log(process.env.TEST);
app.listen(port, () => {
  console.log(`Server runing on port: ${port}`);
});
