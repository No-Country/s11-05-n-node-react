import { check } from "express-validator";

const userValidator = [
  check("nickName", "El nickName es obligatorio")
    .exists()
    .not()
    .isEmpty()
    .trim(),
  check("email", "El correo no es válido").exists().isEmail().trim(),

  check("password", "El password debe de ser más de 6 letras")
    .exists()
    .isLength({ min: 6 })
    .trim(),
];

export { userValidator };
