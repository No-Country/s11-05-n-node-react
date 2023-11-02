import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RiTeamFill,
  RiLogoutBoxRLine,
  RiUserFill,
  RiMenu3Fill,
  RiCloseLine,
  RiCalendarEventFill,
  RiHome2Line
} from "react-icons/ri";
import { GiSoccerField } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { setLogout } from "../../store/state/authSlice";
import { useDispatch } from "react-redux";

const links = [
  { to: "/home", label: "Inicio", icon: <RiHome2Line className="w-[16px] h-[16px]" /> },

  {
    to: "/profile",
    label: "Perfil",
    icon: <RiUserFill className="w-[16px] h-[16px]" />
  },
  { to: "/create", label: "Mis Equipo", icon: <RiTeamFill className="w-[16px] h-[16px]" /> },
  { to: "/matches", label: "Partidos", icon: <GiSoccerField className="w-[19px] h-[19px]" /> },
  {
    to: "/partidas",
    label: "Partidas",
    icon: <IoGameControllerOutline className="w-[16px] h-[16px]" />
  },
  {
    to: "/events",
    label: "Evento/Torneo",
    icon: <RiCalendarEventFill className="w-[16px] h-[16px]" />
  }
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
        className={`bg-[#121212] text-[#babbbd] fixed ${
          open ? "-left-0" : "-left-full"
        }  lg:left-0 top-0 w-64 h-full p-8 flex flex-col justify-between transition-all z-50 border-r border-gray-300`}
      >
        <div>
          <nav className="">
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

            <div className="flex flex-col w-full gap-4 py-4 rounded-lg font-bold text-[1rem]"></div>
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
