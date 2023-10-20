import { useState } from "react";
import { validateRegister } from "../utils/ValidateRegister";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../services/httpRequest";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [errores, setErrores] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const validate = validateRegister(username, email, password, repeatPassword);

    if (validate.status) {
      try {
        const response = await postRequest(
          { nickName: username, email: email, password: password },
          "/user/create"
        );

        console.log(response);
        navigate("/login");
      } catch (error) {
        setErrores("Error al intentar registrarse");
        console.log(error.message);
        setTimeout(() => {
          setErrores("");
        }, 2000);
      }
    } else {
      setErrores(validate.msg);

      setTimeout(() => {
        setErrores("");
      }, 2000);
    }
  };

  return (
    <>
      <section className="w-full h-screen flex items-center justify-center bg-[#C5CBDE]">
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <div className="w-11/12 max-w-3xl mx-auto bg-[#F1F3FF] p-20 rounded-2xl shadow-md">
            <h1 className="text-black md:text-5xl text-2xl font-bold mb-4">Regístrate</h1>
            <p className="text-black text-sm font-medium mb-6">
              Crea tu usuario en Let&apos;s play y comienza con la diversión
            </p>
            <form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
              <div className="flex flex-row gap-6 pt-5 py-3">
                <div className="flex flex-1 flex-col relative">
                  <label
                    className="bg-[#F1F3FF] absolute top-0 left-2 text-gray-600 transform -translate-y-2 transition-transform origin-top text-sm focus:outline-none focus:ring"
                    style={{ top: "-0.1rem" }}
                  >
                    &nbsp;Usuario&nbsp;
                  </label>
                  <input
                    type="text"
                    className="h-12 pl-2 border bg-transparent rounded-sm border-black w-full focus:outline-none focus:ring"
                    onChange={e => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col relative ">
                  <label
                    className="bg-[#F1F3FF] absolute top-0 left-2 text-gray-600 transform -translate-y-2 transition-transform origin-top text-sm"
                    style={{ top: "-0.1rem" }}
                  >
                    &nbsp;Correo electrónico&nbsp;
                  </label>
                  <input
                    type="email"
                    className="h-12 pl-2 border bg-transparent rounded-sm border-black w-full focus:outline-none focus:ring"
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-6">
                <div className="flex flex-1 flex-col relative">
                  <label
                    className="bg-[#F1F3FF] absolute top-0 left-2 text-gray-600 transform -translate-y-2 transition-transform origin-top text-sm"
                    style={{ top: "-0.1rem" }}
                  >
                    &nbsp;Contraseña&nbsp;
                  </label>
                  <input
                    type="password"
                    className="h-12 pl-2 border bg-transparent rounded-sm border-black w-full focus:outline-none focus:ring"
                    onChange={e => {
                      setPassword(e.target.value);
                      console.log(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col relative">
                  <label
                    className="bg-[#F1F3FF] absolute top-0 left-2 text-gray-600 transform -translate-y-2 transition-transform origin-top text-sm"
                    style={{ top: "-0.1rem" }}
                  >
                    &nbsp;Confirmar contraseña&nbsp;
                  </label>
                  <input
                    type="password"
                    className="h-12 pl-2 border bg-transparent rounded-sm border-black w-full focus:outline-none focus:ring"
                    onChange={e => {
                      setrepeatPassword(e.target.value);

                      console.log(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="flex items-center text-xs text-gray-600 w-3/5 py-2">
                  <input type="checkbox" className="mr-2" />
                  Acepto los Términos y condiciones y autorizo el uso de mis datos de acuerdo a la
                  Declaración de Privacidad.
                </label>
              </div>

              {errores && <p>{errores} </p>}
              <button className="bg-gray-500 text-white h-12 w-5/12 rounded-sm hover:bg-blue-600 self-start">
                Crear cuenta
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
