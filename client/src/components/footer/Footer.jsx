import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";

/* eslint-disable no-unused-vars */
const FooterWire = () => {
  return (
    <footer className="flex justify-evenly p-8 bg-gray-200 h-[160px]">
      <div>
        <span className="font-bold text-[2rem]">Let’s play</span>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor.
        </p>
      </div>
      <div className="flex space-x-8">
        <a href="/faq" className="text-base font-bold hover:underline">
          FAQ
        </a>
        <a href="/about-us" className="text-base font-bold hover:underline">
          Sobre nosotros
        </a>
        <a href="/contact" className="text-base font-bold hover:underline">
          Contacto
        </a>
      </div>
    </footer>
  );
};

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="max-w-screen-xl mx-auto py-10 flex max-md:flex-col max-md:gap-5 items-center justify-between w-[90%]">
        <div className="flex flex-col gap-1">
          <Link to="/home" aria-describedby="Pagina de Inicio" className="font-bold text-2xl">
            <span>{"Let's"}</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-green-700 via-[#B5FF16] to-[#B5FF16]">
              Play
            </span>
          </Link>
          <small>Tu sitio de deportes</small>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/aboutus"
            aria-describedby="Sobre nosotros"
            className="flex items-center gap-1.5 font-semibold -mb-1 border-b-2 border-b-transparent hover:border-b-[#B5FF16] transition duration-150"
          >
            <HiUserGroup size={22} />
            Sobre nosotros
          </Link>

          <Link
            to="/contact"
            aria-describedby="Contacto"
            className="flex items-center gap-1.5 font-semibold -mb-1 border-b-2 border-b-transparent hover:border-b-[#B5FF16] transition duration-150"
          >
            <IoMdContact size={22} />
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
