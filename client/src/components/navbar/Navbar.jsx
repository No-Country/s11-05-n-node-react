/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { CiGlobe, CiCircleQuestion } from "react-icons/ci";
import { useState } from "react";
const NavbarWire = () => {
  return (
    <nav className="flex items-center gap-2 w-full  h-[96px]  top-0 px-3 sticky z-50 bg-gray-200 ">
      <div className="max-w-screen-2xl mx-auto flex items-center w-full">
        <Link
          to="/"
          aria-describedby="Pagina de Inicio"
          className="ml-[2.5%] w-full font-bold text-[2rem]  "
        >
          {"Let's play"}
        </Link>

        <ul className="flex justify-end items-center gap-4 w-fit h-full mr-[100px] ">
          <li className="h-[100%] flex justify-center items-center">
            <Link className="flex justify-center items-center w-full h-full text-slate-600 gap-1">
              <CiCircleQuestion
                size={24}
                className="text-slate-600  hover:text-slate-900 transition-colors "
              />
              Ayuda
            </Link>
          </li>
          <li className="h-[100%] flex justify-center items-center">
            <Link className="flex justify-center items-center w-full h-full text-slate-600 gap-1">
              <CiGlobe
                size={24}
                className="text-slate-600  hover:text-slate-900 transition-colors"
              />
              Contactanos
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="flex justify-center items-center bg-[#bebebe] text-white rounded-xl hover:bg-slate-500 transition-colors cursor-pointer h-[40px] w-[158px]"
            >
              registrarme
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="flex justify-center items-center bg-[#bebebe] text-white rounded-xl hover:bg-slate-500 transition-colors cursor-pointer  h-[40px] w-[158px]"
            >
              iniciar sesion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-white bg-white/5 backdrop-blur-lg">
      <nav className="max-w-screen-xl mx-auto max-sm:py-5 py-2 flex max-md:flex-col items-center justify-between w-[90%]">
        <div className="md:w-fit w-full flex items-center justify-between md:min-h-[70px]">
          <Link to="/home" aria-describedby="Pagina de Inicio" className="font-bold text-3xl">
            <span>{"Let's"}</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-green-700 via-[#B5FF16] to-[#B5FF16]">
              Play
            </span>
          </Link>

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className={"md:hidden hamburger block" + (openMenu ? " is-active" : "")}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className={
            "transition-height md:flex gap-3 md:gap-4 md:mt-1 overflow-hidden max-md:w-full max-md:flex-col max-md:order-3 font-medium" +
            (openMenu ? " max-md:pt-5 max-md:h-[200px] flex" : " max-md:h-0")
          }
        >
          <Link
            to="/help"
            className={"flex items-center pressable gap-1.5" + (openMenu ? "" : " max-md:hidden")}
            aria-label="Ayuda"
          >
            <CiCircleQuestion size={22} />
            Ayuda
          </Link>

          <Link
            to="/contact"
            className={"flex items-center pressable gap-1.5" + (openMenu ? "" : " max-md:hidden")}
            aria-label="Contactanos"
          >
            <CiGlobe size={22} />
            Contactanos
          </Link>

          <Link
            to="/register"
            className={
              "flex items-center h-[38px] max-sm:justify-center max-md:text-center pressable bg-gradient-to-b from-[#B5FF16] to-green-600 text-black/90 py-1.5 px-3.5 rounded-lg" +
              (openMenu ? "" : " max-md:hidden")
            }
            aria-label="Registrate"
          >
            Registrate
          </Link>

          <Link
            to="/login"
            className={
              "max-md:text-center pressable border py-1.5 px-3.5 rounded-lg border-[#B5FF16]" +
              (openMenu ? "" : " max-md:hidden")
            }
            aria-label="Inicia Sesión"
          >
            Inicia Sesión
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
