import dotenv from "dotenv";
dotenv.config();
let envs;

const config = (state = process.env.PRODUCTION_ENVIRONMENT) => {
  if (state === "false") {
    return (envs = {
      db_url: process.env.DB_URL_CONNECTION,
    });
  }
  return (envs = {
    //En este segmento tienen que colocar las variables apra produccion.
  });
};

export { config };
