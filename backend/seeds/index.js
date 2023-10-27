import { seedUser } from './user.js';
import { seedCategory } from './category.js';
import { seedTeam } from './team.js';
import mongoose from 'mongoose';
import { config } from '../config/config.js';

/*dropea la base de datos y luego la vuelve a subir, se hace para borrar la infomacion vieja tanto la data como los esquemas */
const connectToDatabase = async () => {
    try {
        await mongoose.connect(config[process.env.NODE_ENV].db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        //ejecucion de semillas
        await seedUser()
        await seedCategory();
        await seedTeam();

        //cierra la conexion
        return await mongoose.connection.close();
        
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }

};

connectToDatabase()

