import dotenv from "dotenv";
dotenv.config();
let envs;

const config = {
  dev: {
    db_url: process.env.DB_URL_CONNECTION,
    port: process.env.PORT,
  },
  production: {},
};

export { config };
