const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;

export const validateRegister = (username, email, password, repeatPassword) => {
  if ((!username.trim(), !password.trim(), !repeatPassword.trim(), !email.trim())) {
    return { msg: "Debe completar todos los campos", status: false };
  }

  if (!emailRegex.test(email)) {
    console.log("Email inválido");

    return { msg: "Email inválido", status: false };
  }
  if (!passwordRegex.test(password)) {
    return {
      msg: `Tu contraseña debe cumplir con las siguientes reglas:

    Debe contener al menos una letra minúscula (a-z).
    Debe contener al menos una letra mayúscula (A-Z).
    Debe tener una longitud mínima de 6 caracteres.`,
      status: false
    };
  }

  if (password !== repeatPassword) {
    return { msg: "Las contraseñas no coinciden ", status: false };
  }

  return { msg: "Creado con éxito", status: true };
};
