import dotenv from "dotenv";
dotenv.config();

const config = {
  development: {
    db_url: process.env.DB_URL_DEVELOPMENT,
    port: process.env.PORT,
    email: process.env.EMAIL_DEVELOPMENT,
    pass_email: process.env.PASS_DEVELOPMENT,
    jwt_secret: process.env.JWT_SECRET,
  },
  production: {
    db_url: process.env.DB_URL_PRODUCTION,
    port: process.env.PORT,
    email: process.env.EMAIL_PRODUCTION,
    pass_email: process.env.PASS_PRODUCTION,
    jwt_secret: process.env.JWT_SECRET,
  },
};

export { config };
