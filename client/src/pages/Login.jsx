import { Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/state/authSlice";
import { useNavigate } from "react-router-dom";
import clearStateErrors from "../hooks/clearStateErrors";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errores, setErrores] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;

  const isEmailValid = email => emailRegex.test(email);
  const isPasswordValid = password => passwordRegex.test(password);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!username || !password) {
      setErrores("Por favor, complete todos los campos.");
      clearStateErrors("", setErrores);
      return;
    }

    if (!isEmailValid(username)) {
      setErrores("Correo electrónico inválido.");
      clearStateErrors("", setErrores);
      return;
    }

    if (!isPasswordValid(password)) {
      setErrores("Contraseña inválida.");
      clearStateErrors("", setErrores);
      return;
    }

    const isLogin = await dispatch(loginUser({ email: username, password: password }));

    if (isLogin.login) {
      if (isLogin.user.status) return navigate("/");
      navigate("/onboarding");
    }
  };

  return (
    <section className="relative max-w-screen-xl w-[90%] mx-auto">
      <span className="gradient"></span>

      <div className="ml-auto sm:max-w-sm w-full sm:bg-[#151515] my-16 p-10 sm:p-12 rounded-2xl shadow-md">
        <div className="text-center">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white text-5xl font-bold">
            <span>{"Let's"}</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-green-700 via-[#B5FF16] to-[#B5FF16]">
              Play
            </span>
          </h1>

          <h2 className="mt-5 mb-7 text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white">Ingresa con tu cuenta</h2>
        </div>

        <form className="flex flex-col gap-6" onSubmit={e => handleSubmit(e)}>
          <div className="flex flex-col relative">
            <label className=" bg-black sm:bg-[#151515] rounded-md absolute top-0 left-2 text-gray-200 transform -translate-y-2 transition-transform origin-top text-sm px-2">
              Correo electrónico
            </label>
            <input
              type="email"
              className="h-12 pl-2 border bg-black sm:bg-[#151515] text-white rounded-md border-[#B5FF16] placeholder:bg-black placeholder:text-white"
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col relative">
            <label className="bg-black sm:bg-[#151515] rounded-md absolute top-0 left-2 text-gray-200 transform -translate-y-2 transition-transform origin-top text-sm px-2">
              Contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="h-12 border bg-transparent rounded-md text-white border-[#B5FF16] pl-2 pr-10"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />

            <span
              className="absolute inset-y-0 right-3 h-fit my-auto cursor-pointer text-white"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <BsEyeFill size={20} /> : <BsEyeSlashFill size={20} />}
            </span>
          </div>
          <Link to={"/recover"} className="text-links text-center text-xs mt-1 font-medium">
            ¿Olvidó su contraseña?
          </Link>
          {errores && <p className="py-1.5 px-2.5 bg-red-100 text-red-500 w-fit rounded-md text-center text-sm mx-auto">{errores} </p>}
          <button className="bg-gradient-to-b from-[#B5FF16] to-green-300 text-black font-semibold h-12 px-6 max-sm:w-full text-lg rounded-md pressable">
            Iniciar sesión{" "}
          </button>
        </form>

        <p className="text-center mt-9 text-sm text-white font-medium">
          ¿No tiene una cuenta?{" "}
          <Link to={"/register"} className="text-links">
            Registrarse ahora
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
