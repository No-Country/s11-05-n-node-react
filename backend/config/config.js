import dotenv from "dotenv";
dotenv.config();
let envs;

const development = {
  dev: {
    db_url: process.env.DB_URL_CONNECTION,
    port: process.env.PORT,
  },
  production: {},
};

export { development };
