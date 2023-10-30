import mongoose from "mongoose";
import { config } from "../config/config.js";

console.log(config[process.env.NODE_ENV].db_url);
export const initDBConnection = () => {
  mongoose.set("strictQuery", false); // cambiar a true para probar consultas con datos que no estan en el schema
  mongoose
    .connect(config[process.env.NODE_ENV].db_url)
    .then(() => {
      console.log("La base de datos se conecto correctamente");
    })
    .catch((error) => {
      console.log("Error al conectar con la base de datos");
      console.log(error.message);
    });
};
