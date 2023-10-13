import { Link } from "react-router-dom";
import { CiGlobe, CiCircleQuestion } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav className="flex items-center gap-2 w-full  h-[96px]  top-0 px-3 sticky z-50 bg-gray-200 ">
      <div className="max-w-screen-2xl mx-auto flex items-center w-full">
        <Link
          to="/"
          aria-describedby="Pagina de Inicio"
          className="ml-[2.5%] w-full font-bold text-[2rem]  "
        >
          Let’s play
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
export default Navbar;
