import { check } from "express-validator";

const userCreateValidator = [
  check("nickName", "El nickName es obligatorio").exists().notEmpty().trim(),
  check("email", "El correo no es válido").exists().isEmail().trim(),

  check("password", "La password debe tener al menos 6 caracteres")
    .exists()
    .isLength({ min: 6 })
    .trim(),
];

const AuthValidator = [

  check('email','Debe ser una dirección de correo electrónico válida')
    .optional()
    .isEmail()
    .trim(),

  check('nickname','El nombre de usuario debe tener al menos 4 caracteres')
    .optional()
    .trim(),

  check('password','La password debe tener al menos 6 caracteres')
    .exists()
    .isLength({ min: 6 })
    .trim(),

  check(['email', 'nickname'])
    .custom((value, { req }) => {
      if (!req.body.email && !req.body.nickname) {
        throw new Error('Debes proporcionar un correo electrónico o un nombre de usuario');
      }
      return true;
    }),
];

export { userCreateValidator,AuthValidator };
