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
  check("email", "Debe ser una dirección de correo electrónico válida")
    .optional()
    .isEmail()
    .trim(),

  check("nickname", "El nombre de usuario debe tener al menos 4 caracteres")
    .optional()
    .trim(),

  check("password", "La password debe tener al menos 6 caracteres")
    .exists()
    .isLength({ min: 6 })
    .trim(),

  check(["email", "nickname"]).custom((value, { req }) => {
    if (!req.body.email && !req.body.nickname) {
      throw new Error(
        "Debes proporcionar un correo electrónico o un nombre de usuario"
      );
    }
    return true;
  }),
];

const edithUserValidator = [
  check("firstName", "El nombre no es válido").optional().notEmpty().trim(),
  check("lastName", "El apellido no es válido").optional().notEmpty().trim(),
  check("nickName", "El nickName no es válido").optional().notEmpty().trim(),
  check("category", "El nombre de la categoría no es válido")
    .optional()
    .notEmpty()
    .trim(),
  check("category", "El número de jugadores de la categoría no es válido")
    .optional()
    .notEmpty()
    .trim(),
  check("myTeams", "El campo myTeams no es válido")
    .optional()
    .notEmpty()
    .trim(),
  check("friends", "Los amigos no son válidos").optional().notEmpty().trim(),
  check("cellNumber", "El número de celular no es válido")
    .optional()
    .isNumeric(),
  check("dateOfBirth", "La fecha de nacimiento no es válida")
    .optional()
    .isISO8601(),
  check("age", "La edad no es válida").optional().isNumeric(),
  check("ubication.country", "El país no es válido")
    .optional()
    .notEmpty()
    .trim(),
  check("ubication.city", "La ciudad no es válida")
    .optional()
    .notEmpty()
    .trim(),
  check("email", "El correo no es válido").optional().exists().isEmail().trim(),
];

const resetPassValidator = [
  check("email", "El correo no es valido").exists().isEmail().trim(),
];

export {
  userCreateValidator,
  AuthValidator,
  edithUserValidator,
  resetPassValidator,
};
