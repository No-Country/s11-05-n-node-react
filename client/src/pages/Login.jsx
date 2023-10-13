import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;

  const isEmailValid = email => emailRegex.test(email);
  const isPasswordValid = password => passwordRegex.test(password);

  const handleSubmit = e => {
    e.preventDefault();

    if (!username || !password) {
      // Verificar que ningún campo esté vacío y generar un error si es así
      console.log("Por favor, complete todos los campos.");
      return;
    }

    if (!isEmailValid(username)) {
      // Verificar la validez del correo electrónico
      console.log("Correo electrónico inválido.");
      return;
    }

    if (!isPasswordValid(password)) {
      // Verificar la validez de la contraseña
      console.log("Contraseña inválida.");
      return;
    }

    // Si se superan todas las validaciones, realizar la solicitud POST
    // Aquí puedes agregar el código para la solicitud POST
  };

  return (
    <section className="w-full h-screen flex bg-[#C5CBDE] ">
      <div className="md:w-6/12 lg:w-6/12 xl:w-6/12  w-0  h-full"></div>

      <div className="md:w-6/12  lg:w-6/12 xl:w-6/12 w-full  h-full flex justify-center items-center text-center  ">
        <div className="md:w-auto lg:w-auto xl:w-auto w-11/12 m-auto  bg-[#F1F3FF] p-[50px] rounded-2xl shadow-md">
          <div className="text-center">
            <h1 className="text-black md:text-5xl  text-2xl  font-bold">Let’s play</h1>

            <h2 className="mt-7 mb-7 text-sm  ">Iniciar sesión con correo electrónico</h2>
          </div>

          <form className="flex flex-col gap-6" onSubmit={e => handleSubmit(e)}>
            <div className="flex flex-col relative">
              <label className=" bg-[#F1F3FF] absolute top-0 left-2 text-gray-600 transform -translate-y-2 transition-transform origin-top text-sm">
                Correo electrónico
              </label>
              <input
                type="email"
                className="h-12 pl-2 border bg-transparent rounded-sm border-black "
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col relative">
              <label className="bg-[#F1F3FF] absolute top-0 left-2 text-gray-600 transform -translate-y-2 transition-transform origin-top text-sm">
                Contraseña
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="h-12 border bg-transparent rounded-sm border-black pl-2"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
              />
              <span
                className="absolute top-2 right-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
              </span>
            </div>
            <Link to={"/recover"} className="text-links text-center text-xs mt-1 ">
              ¿Olvidó su contraseña?
            </Link>

            <button className="py-4 px-6 bg-buttons text-white text-[16px] rounded-md">
              Iniciar sesión{" "}
            </button>
          </form>

          <div className="flex mt-3 gap-1 items-center justify-center">
            <div className="w-40 h-[1px] bg-black"></div>
            <div className="w-2 h-2 border border-black bg-transparent rounded-full"></div>
            <div className="w-40 h-[1px] bg-black"></div>
          </div>

          <div className="w-full flex text-3xl justify-center gap-5 mt-9">
            <FcGoogle />
            <BsFacebook />
          </div>

          <p className="text-center mt-9 text-sm">
            ¿No tiene una cuenta?{" "}
            <Link to={"/register"} className="text-links">
              Registrarse ahora
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
