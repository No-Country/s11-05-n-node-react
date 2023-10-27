import mongoose from 'mongoose';
import { config } from "../config/config.js";

export const dropDatabase = () => {
    mongoose.connect(config[process.env.NODE_ENV].db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      
      mongoose.connection.dropDatabase()
        .then(() => {
          console.log('Base de datos eliminada correctamente.');
          mongoose.connection.close();
        })
        .catch((error) => console.error('Error al eliminar la base de datos:', error));
}


dropDatabase()
