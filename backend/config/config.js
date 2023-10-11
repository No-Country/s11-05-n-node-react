import dotenv from "dotenv";
dotenv.config();

const config = {
  development: {
    db_url: process.env.DB_URL_DEVELOPMENT,
    port: process.env.PORT,
  },
  production: {
    db_url: process.env.DB_URL_PRODUCTION,
    port: process.env.PORT,
  },
};

export { config };
