import { useState } from "react";
import { validateRegister } from "../utils/ValidateRegister";
import { useNavigate, Link } from "react-router-dom";
import { postRequest } from "../services/httpRequest";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { RiCloseLine } from "react-icons/ri";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [errores, setErrores] = useState("");
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false
  });

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    document.querySelector('button[type="submit"]').innerText = "Creando cuenta...";
    const validate = validateRegister(username, email, password, repeatPassword);

    if (validate.status) {
      try {
        const res = await postRequest(
          { nickName: username, email: email, password: password },
          "/user/create"
        );

        if (res?.message === "Usuario creado") {
          toast.success("Bienvenido");
          document.querySelector('button[type="submit"]').innerText = "Crear cuenta";
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          toast.error(res.message);
          document.querySelector('button[type="submit"]').innerText = "Crear cuenta";
        }
      } catch (error) {
        toast.error(error.message);
        setErrores(error.message);
      }
    } else {
      setErrores(validate.msg);
      document.querySelector('button[type="submit"]').innerText = "Crear cuenta";
    }
  };

  return (
    <>
      <Toaster />
      <section className="w-full flex flex-col items-center justify-center background-circle">
        <div className="max-w-3xl mx-auto w-[95%] sm:w-[90%] bg-neutral-950 p-8 sm:p-12 md:p-16 rounded-2xl shadow-md my-12 text-white">
          <h1 className="md:text-5xl text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white pb-4">
            Regístrate
          </h1>
          <p className="font-semibold text-lg mb-6 -mt-3 text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white">
            Crea tu usuario en <span>{"Let's"}</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-green-700 via-[#B5FF16] to-[#B5FF16]">
              Play
            </span>{" "}
            y comienza con la diversión
          </p>
          <form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 py-3">
              <div className="flex flex-1 flex-col relative">
                <label
                  className="bg-black sm:bg-neutral-950 rounded-md absolute top-0 left-3.5 px-1 transform -translate-y-2 transition-transform origin-top text-sm focus:outline-none focus:ring"
                  style={{ top: "-0.1rem" }}
                >
                  &nbsp;Usuario&nbsp;
                </label>
                <input
                  type="text"
                  className="h-12 pl-2 border bg-transparent rounded-md border-[#B5FF16] w-full focus:outline-none focus:ring"
                  onChange={e => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col relative ">
                <label
                  className="bg-black sm:bg-neutral-950 rounded-md absolute top-0 left-3.5 px-1 transform -translate-y-2 transition-transform origin-top text-sm"
                  style={{ top: "-0.1rem" }}
                >
                  &nbsp;Correo electrónico&nbsp;
                </label>
                <input
                  type="email"
                  className="h-12 pl-2 border bg-transparent rounded-md border-[#B5FF16] w-full focus:outline-none focus:ring"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col relative">
                <label className="bg-black sm:bg-neutral-950 rounded-md absolute top-0 left-3.5 px-1 transform -translate-y-2 transition-transform origin-top text-sm">
                  Contraseña
                </label>
                <input
                  type={showPassword.password ? "text" : "password"}
                  className="h-12 border bg-transparent rounded-md border-[#B5FF16] pl-2 pr-10"
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />

                <span
                  className="absolute inset-y-0 right-3 h-fit my-auto cursor-pointer"
                  onClick={() =>
                    setShowPassword({
                      ...showPassword,
                      password: !showPassword.password
                    })
                  }
                >
                  {showPassword.password ? <BsEyeFill size={20} /> : <BsEyeSlashFill size={20} />}
                </span>
              </div>
              <div className="flex flex-1 flex-col relative">
                <div className="flex flex-col relative">
                  <label
                    className="bg-black sm:bg-neutral-950 rounded-md absolute top-0 left-3.5 px-1 transform -translate-y-2 transition-transform origin-top text-sm"
                    style={{ top: "-0.1rem" }}
                  >
                    &nbsp;Confirmar contraseña&nbsp;
                  </label>
                  <input
                    type={showPassword.confirm ? "text" : "password"}
                    className="h-12 pl-2 pr-10 border bg-transparent rounded-md border-[#B5FF16] w-full focus:outline-none focus:ring"
                    onChange={e => {
                      setrepeatPassword(e.target.value);
                    }}
                  />

                  <span
                    className="absolute inset-y-0 right-3 h-fit my-auto cursor-pointer"
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirm: !showPassword.confirm
                      })
                    }
                  >
                    {showPassword.confirm ? <BsEyeFill size={20} /> : <BsEyeSlashFill size={20} />}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex items-center text-xs py-2">
                <input type="checkbox" className="mr-4" />
                Acepto los Términos y condiciones y autorizo el uso de mis datos de acuerdo a la
                Declaración de Privacidad.
              </label>
            </div>

            {errores && (
              <div className="py-1.5 px-2.5 bg-red-100 text-red-500 w-fit rounded-md relative">
                {errores}
                <button
                  className="absolute -right-3 -top-3 bg-red-100 p-1 rounded-full text-sm"
                  type="button"
                  onClick={() => setErrores(null)}
                >
                  <RiCloseLine size={18} />
                </button>
              </div>
            )}
            <button
              type="submit"
              className="bg-gradient-to-b from-[#B5FF16] to-green-300 text-black font-semibold h-12 px-6 max-sm:w-full text-lg rounded-md self-start pressable"
            >
              Crear cuenta
            </button>
          </form>
          <p className="text-center mt-9 text-sm font-medium">
            ¿Ya tiene una cuenta?{" "}
            <Link to={"/login"} className="text-links">
              Ingresar ahora
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
