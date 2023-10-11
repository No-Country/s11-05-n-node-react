import { Link } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci"
const Navbar = () => {
    return (
        <nav className="flex gap-2 w-full  h-[56px] bg-[#ACAEB580] px-3">
            <div className="w-[20%] flex justify-center items-center h-full cursor-pointer" aria-describedby="Pagina de Inicio">
                <Link to="/" aria-describedby="Pagina de Inicio" className="flex justify-center items-center hover:bg-slate-50 transition-colors h-full w-full">
                    LetsPlay
                </Link>
            </div>
            <ul className="flex justify-end items-center gap-3 w-[80%]  h-full ">

                <li className="w-[10%]  h-[60%]">
                    <Link className="flex justify-center w-full h-full">
                        <CiCircleQuestion className="text-slate-600  hover:text-slate-900 transition-colors h-full w-[25%]" />
                    </Link>
                </li>
                <li className="w-[10%]  h-[60%]">
                    <Link className="flex justify-center w-full h-full">
                        <CiGlobe className="text-slate-600  hover:text-slate-900 transition-colors h-full w-[25%]" />
                    </Link>
                </li>

                <li className="w-[20%]  h-[60%]" >
                    <Link to="/login" className="flex justify-center items-center bg-slate-400 rounded-md hover:bg-slate-500 transition-colors cursor-pointer  h-full w-full">
                        login
                    </Link>
                </li>
                <li className="w-[20%] h-[60%]">
                    <Link to="/register" className="flex justify-center items-center bg-slate-400 rounded-md hover:bg-slate-500 transition-colors cursor-pointer h-full w-full">
                        registro
                    </Link>
                </li>

            </ul>
        </nav>
    )
}
export default Navbar