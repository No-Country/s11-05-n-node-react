import dotenv from "dotenv";
dotenv.config();

const config = {
  development: {
    db_url: process.env.DB_URL_DEVELOPMENT,
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SECRET,
  },
  production: {
    db_url: process.env.DB_URL_PRODUCTION,
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SECRET,
  },
};

export { config };
