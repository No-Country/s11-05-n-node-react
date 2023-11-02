import { Link } from "react-router-dom";
import { useState } from "react";
import { HiUserGroup } from "react-icons/hi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-white bg-white/5 backdrop-blur-md border-b border-white/5">
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
            "transition-height md:flex gap-5 md:gap-4 md:mt-1 overflow-hidden max-md:w-full max-md:flex-col max-md:order-3 font-medium" +
            (openMenu ? " max-md:pt-5 max-md:h-[180px] flex" : " max-md:h-0")
          }
        >
          <Link
            to="/aboutus"
            className={"flex items-center pressable gap-1.5" + (openMenu ? "" : " max-md:hidden")}
            aria-label="Contactanos"
          >
            <HiUserGroup size={22} />
            Sobre Nosotros
          </Link>

          <Link
            to="/register"
            className={
              "flex items-center h-[38px] max-md:justify-center max-md:text-center pressable bg-gradient-to-b from-[#B5FF16] to-green-600 text-black/90 py-1.5 px-3.5 rounded-lg" +
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
