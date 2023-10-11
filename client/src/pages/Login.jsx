import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";

function Login() {
  
  const[username,setUsername]= useState('')
  const[password,setPassword]= useState('')



  const handleSubmit = () => {

    if(![username,password].includes('')) {

      //Aquí generamos el error 

      return
      
    }


    // Aquí solicitud  post 





    
  };

  return (
    <section className="w-full h-screen flex bg-background ">
      <div className="w-6/12 h-screen"></div>

      <div className="w-6/12 h-screen flex justify-center items-center text-center  ">
        <div className="w-auto bg-login p-[71px] rounded-2xl shadow-md">
          <div className="text-center">
            <h1 className="text-black text-5xl font-bold">Let’s play</h1>

            <h2 className="mt-12 mb-12 text-sm  ">
              Iniciar sesión con correo electrónico
            </h2>
          </div>

          <form className="flex flex-col gap-6">
            {/* email input  */}
            <div className="flex flex-col relative">
              <label className=" bg-login absolute top-0 left-2 text-gray-600 transform -translate-y-2 transition-transform origin-top text-sm">
                Correo electrónico
              </label>
              <input
                type="email"
                className="h-12 p-[ 8px 0px 8px 16px] border bg-transparent rounded-sm border-black"

                value={username}
                
                onChange={(e)=> {

                  setUsername(e.target.value)
                }}
              />
            </div>

            {/* password input  */}
            <div className="flex flex-col relative">
              <label className=" bg-login absolute top-0 left-2 text-gray-600 transform -translate-y-2 transition-transform origin-top text-sm">
                Contraseña
              </label>
              <input
                type="password"
                className="h-12 border bg-transparent p-[ 8px 0px 8px 16px] rounded-sm border-black"

                value={password}
                onChange={(e)=> {

                  setPassword(e.target.value)
                }}
              />
              <Link
                to={"/recover"}
                className="text-links text-center text-xs mt-1 "
              >
                ¿Olvidó su contraseña?
              </Link>
            </div>
            <button
              onClick={handleSubmit}
              className="py-4 px-6 bg-buttons text-white text-[16px] rounded-md"
            >
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
