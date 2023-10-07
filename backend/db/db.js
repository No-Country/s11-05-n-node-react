import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const initDBConnection = () => {
  const DB_CONNECTION_STRING = process.env.DB_URL_CONNECTION;
  mongoose.set('strictQuery', false); // cambiar a true para probar consultas con datos que no estan en el schema
  mongoose
    .connect(DB_CONNECTION_STRING)
    .then(() => {
      console.log('La base de datos se conecto correctamente');
    })
    .catch((error) => {
      console.log('Error al conectar con la base de datos');
      console.log(error);
    });
};
