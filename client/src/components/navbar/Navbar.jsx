import { Link } from "react-router-dom";
import { CiGlobe, CiCircleQuestion } from "react-icons/ci";
const Navbar = () => {

    return (
        <nav className="flex gap-2 w-full  h-[96px]  top-0 px-3 fixed  bg-gray-200 ">
            <div className="w-[20%] flex justify-center items-center h-full cursor-pointer" aria-describedby="Pagina de Inicio">
                <Link to="/" aria-describedby="Pagina de Inicio" className="flex justify-center items-center h-full w-full">
                    <span className="font-bold text-[2rem]">Let’s play</span>

                </Link>
            </div>
            <ul className="flex justify-end items-center gap-4 w-[80%]  h-full mr-[100px] ">

                <li className="w-[10%]  h-[100%] flex justify-center items-center">
                    <Link className="flex justify-center items-center w-full h-full text-slate-600">
                        Ayuda
                        <CiCircleQuestion className="text-slate-600  hover:text-slate-900 transition-colors h-[24px] w-[79px]" />
                    </Link>
                </li>
                <li className="w-[10%]  h-[100%] flex justify-center items-center">
                    <Link className="flex justify-center items-center w-full h-full text-slate-600">
                        Contactanos
                        <CiGlobe className="text-slate-600  hover:text-slate-900 transition-colors h-[24px] w-[113px]" />
                    </Link>
                </li>
                <li className="w-[15%]">
                    <Link to="/register" className="flex justify-center items-center bg-[#bebebe] text-white rounded-xl hover:bg-slate-500 transition-colors cursor-pointer h-[40px] w-[158px]">
                        registrarme
                    </Link>
                </li>
                <li className="w-[15%] " >
                    <Link to="/login" className="flex justify-center items-center bg-[#bebebe] text-white rounded-xl hover:bg-slate-500 transition-colors cursor-pointer  h-[40px] w-[158px]">
                        iniciar sesion
                    </Link>
                </li>

            </ul>
        </nav>
    )
}
export default Navbar