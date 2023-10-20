const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;

export const validateRegister = (username, email, password, repeatPassword) => {
  if ((!username.trim(), !password.trim(), !repeatPassword.trim(), !email.trim())) {
    console.log("Debe completar todos los campos ");

    return { msg: "Debe completar todos los campos", status: false };
  }

  if (!emailRegex.test(email)) {
    console.log("Email inválido");

    return { msg: "Email inválido", status: false };
  }
  if (!passwordRegex.test(password)) {
    console.log("Contraseña inválida");

    return { msg: "Contraseña inválida", status: false };
  }

  if (password !== repeatPassword) {
    console.log("Las contraseñas no coinciden");

    return { msg: "Las contraseñas no coinciden ", status: false };
  }

  return { msg: "Creado con éxito", status: true };
};
