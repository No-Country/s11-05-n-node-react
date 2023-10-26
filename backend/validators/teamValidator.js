import { check, param } from "express-validator";

const getTeamValidator = [
  param("id", "Debe tener el id del team a buscar").notEmpty(),
];

const teamValidator = [
  check("name", "El nombre del equipo no es válido")
    .notEmpty()
    .isString()
    .trim()
    .custom((value) => {
      // Usar una expresión regular para permitir letras, números y otros caracteres
      const regex = /^[a-zA-Z0-9\s-]+$/;
      if (!regex.test(value)) {
        throw new Error(
          "El nombre del equipo debe contener letras, números y espacios."
        );
      }
      return true;
    }),

  // check("image", "La URL de la imagen del equipo no es válida")
  //   .notEmpty()
  //   .isURL()
  //   .trim(),

  check("players", "La lista de jugadores no es válida").custom((value) => {
    return true;
  }),
];

const teamDeleteValidator = [
  check("id", "El id debe ser un mogoId valido").isMongoId().notEmpty(),
];

export { teamValidator, getTeamValidator, teamDeleteValidator };
