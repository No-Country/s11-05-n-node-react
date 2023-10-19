import { param } from "express-validator";

const getTeamValidator = [
  param('id','Debe tener el id del team a buscar').notEmpty()
]

export { getTeamValidator};
