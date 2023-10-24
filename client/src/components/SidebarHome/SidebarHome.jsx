import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RiMapPinUserFill,
  RiEqualizerFill,
  RiTeamFill,
  RiTrophyFill,
  RiLogoutBoxRLine,
  RiUserFill,
  RiCheckboxBlankCircleFill,
  RiArrowUpSLine,
  RiMenu3Fill,
  RiCloseLine
} from "react-icons/ri";
import { setLogout } from "../../store/state/authSlice";
import { useDispatch } from "react-redux";

const links = [
  {
    to: "/profile",
    label: "Perfil",
    icon: <RiUserFill className="w-[25px] h-[25px] rounded-full bg-[#babbbd] text-[#1E1F24]" />
  },
  { to: "/create", label: "Crear Equipo", icon: <RiTeamFill /> },
  { to: "/events", label: "Evento/Torneo", icon: <RiTrophyFill /> },
  { to: "/matches", label: "Partidos", icon: <RiMapPinUserFill /> }
];

const SidebarHome = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <section
        className={`bg-[#1E1F24] text-[#babbbd] fixed ${
          open ? "-left-0" : "-left-full"
        }  lg:left-0 top-0 w-64 h-full p-8 flex flex-col justify-between transition-all z-50`}
      >
        <div>
          <nav>
            <Link
              to="/"
              aria-describedby="Pagina de Inicio"
              className="flex mb-8 w-[100%] justify-center items-center h-[10%] text-white font-bold text-[2rem]"
            >
              Let’s play
            </Link>
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="flex items-center gap-4 py-4 hover:text-white font-bold text-[1rem]"
              >
                <span className="flex ml-2 justify-center items-center hover:text-white">
                  {link.icon}
                </span>
                {link.label}
              </Link>
            ))}

            {/* Error en consola */}

            <div className="flex flex-col w-full gap-4 py-4 rounded-lg font-bold text-[1rem]">
              <span className="flex justify-between items-center gap-4 ml-2">
                {" "}
                <RiEqualizerFill />
                <div className=" w-full flex flex- items-center justify-between">
                  <span className="  hover:text-white">Ajustes</span>
                  <RiArrowUpSLine className=" flex " />
                </div>
              </span>
              <nav className="flex flex-col border-l border-[#343538] ml-4">
                <Link className="relative pl-7 py-2  hover:text-white ">
                  <RiCheckboxBlankCircleFill className="absolute -left-[6px] text-[#fa9146] text-xs top-[50%] -translate-y-[50%] p-[3px] bg-[#1E1F24] rounded-full" />
                  Plan
                </Link>
                <Link className="relative pl-7 py-2  hover:text-white ">
                  <RiCheckboxBlankCircleFill className="absolute -left-[6px] text-#d9dadf] text-xs top-[50%] -translate-y-[50%] p-[3px] bg-[#1E1F24] rounded-full" />
                  Seguridad
                </Link>
                <Link className="relative pl-7 py-2  hover:text-white ">
                  <RiCheckboxBlankCircleFill className="absolute -left-[6px] text-#d9dadf] text-xs top-[50%] -translate-y-[50%] p-[3px] bg-[#1E1F24] rounded-full" />
                  Otro
                </Link>
              </nav>
            </div>
          </nav>
        </div>

        <div>
          <button
            onClick={() => {
              dispatch(setLogout());
              navigate("/home");
            }}
            className="flex items-center gap-2 hover:text-white transition-colors text-[1.1rem] font-bold"
          >
            <RiLogoutBoxRLine />
            Salir
          </button>
        </div>
        <button
          onClick={toggle}
          className="lg:hidden fixed right-4 bottom-4 bg-[#1E1F24] text-[#914a08] rounded-full text-xl p-3 z-50"
        >
          {open ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </section>
    </>
  );
};

export default SidebarHome;
