import mongoose from "mongoose";
import { development } from "../config/config.js";

export const initDBConnection = () => {
  const DB_CONNECTION_STRING = development.dev.db_url;
  mongoose.set("strictQuery", false); // cambiar a true para probar consultas con datos que no estan en el schema
  mongoose
    .connect(DB_CONNECTION_STRING)
    .then(() => {
      console.log("La base de datos se conecto correctamente");
    })
    .catch((error) => {
      console.log("Error al conectar con la base de datos");
      console.log(error.message);
    });
};
