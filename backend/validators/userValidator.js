import { check } from "express-validator";

const userCreateValidator = [
  check("nickName", "El nickName es obligatorio").exists().notEmpty().trim(),
  check("email", "El correo no es válido").exists().isEmail().trim(),

  check("password", "El password debe de ser más de 6 letras")
    .exists()
    .isLength({ min: 6 })
    .trim(),
];

export { userCreateValidator };
