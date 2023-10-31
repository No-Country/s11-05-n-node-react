import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
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
    <section className="flex justify-end w-full h-screen bg-[#1E1E1E] relative">
      <div className="h-[50rem] w-[50rem] background-circle fixed"></div>

      <div className="md:w-6/12  lg:w-6/12 xl:w-6/12 w-full  h-full flex justify-center items-center text-center z-50 ">
        <div className="md:w-auto lg:w-auto xl:w-auto w-11/12 m-auto  bg-black p-[50px] rounded-2xl shadow-md">
          <div className="text-center">
            <h1 className="text-white md:text-5xl  text-2xl  font-bold">Let’s play</h1>

            <h2 className="mt-7 mb-7 text-sm text-white ">Iniciar sesión con correo electrónico</h2>
          </div>

          <form className="flex flex-col gap-6" onSubmit={e => handleSubmit(e)}>
            <div className="flex flex-col relative">
              <label className=" bg-black absolute top-0 left-2 text-gray-200 transform -translate-y-2 transition-transform origin-top text-sm px-2">
                Correo electrónico
              </label>
              <input
                type="email"
                className="h-12 pl-2 border bg-black text-white rounded-sm border-white placeholder:bg-black placeholder:text-white"
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col relative">
              <label className="bg-black absolute top-0 left-2 text-gray-200 transform -translate-y-2 transition-transform origin-top text-sm px-2">
                Contraseña
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="h-12 border bg-transparent rounded-sm text-white border-white pl-2"
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
            {errores && <p>{errores} </p>}
            <button className="py-4 px-6 bg-buttons text-white text-[16px] rounded-md">
              Iniciar sesión{" "}
            </button>
          </form>

          <div className="w-full flex text-3xl justify-center gap-5 mt-9">
            <FcGoogle />
            <BsFacebook color="white" />
          </div>

          <p className="text-center mt-9 text-sm text-white">
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
