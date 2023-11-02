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
  {
    to: "/matches/sport",
    label: "Partidos",
    icon: <GiSoccerField className="w-[19px] h-[19px]" />
  },
  {
    to: "/matches/game",
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
        className={`bg-[#101010] text-[#babbbd] fixed ${open ? "-left-0" : "-left-full"
          }  lg:left-0 top-0 w-64 h-full p-8 flex flex-col justify-between transition-all duration-300 z-50`}
      >
        <div>
          <nav className="">
            <Link
              to="/"
              aria-describedby="Pagina de Inicio"
              className="text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white text-4xl font-bold mb-5 block"
            >
              <span>{"Let's"}</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-green-700 via-[#B5FF16] to-[#B5FF16]">
                Play
              </span>
            </Link>
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="flex items-center gap-4 py-4 hover:text-white font-bold text-[1rem]"
              >
                <span className="flex justify-center items-center hover:text-white">
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
            className="flex items-center gap-4 hover:text-white transition-colors text-[1.1rem] font-bold"
          >
            <RiLogoutBoxRLine />
            Salir
          </button>
        </div>
        <button
          onClick={toggle}
          className="lg:hidden fixed right-4 bottom-4 bg-[#B5FF16] text-black rounded-full text-xl p-3 z-50"
        >
          {open ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </section>
    </>
  );
};

export default SidebarHome;
