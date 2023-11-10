import { useNavigate } from "react-router-dom";

import { MdOutlineAddBox } from "react-icons/md";

const TeamBuilding = () => {
  const navigate = useNavigate();

  const articles = [
    {
      titles: "League of Legends",
      description: "Grieta del invocador 5 vs 5",
      time: "13.10.23 18:30PM",
      location: "Bs.As Argentina"
    },
    {
      titles: "Futbol",
      description: "Futbol 5 5 vs 5",
      time: "21.10.23 18:30PM",
      location: "Palermo Futbol,CABA Bs.As Argentina"
    },
    {
      titles: "League of Legends",
      description: "Grieta del invocador 5 vs 5",
      time: "13.10.23 18:30PM",
      location: "Bs.As Argentina"
    },
    {
      titles: "Padel",
      description: "Grieta del invocador 2 vs 2",
      time: "13.10.23 19:30PM",
      location: "Bs.As Argentina"
    }
  ];

  return (
    <>
      <h3 className="flex font-bold text-xl">Crea tu equipo</h3>
      <div className="w-16 h-16 rounded-full bg-[#B5FF16] relative my-6">
        <button
          onClick={() => {
            navigate("/teams");
          }}
          className="absolute -bottom-1 -right-1 bg-white text-black p-1.5 rounded-full"
        >
          {" "}
          <MdOutlineAddBox />
        </button>
      </div>
      <h2 className="flex font-bold mb-3 text-xl">Busquedas relacionadas</h2>
      <div className="bg-[#121212] max-w-[494px] h-auto flex flex-col items-center sm:justify-center p-1 border border-white/50 rounded-md">
        {articles.map((article, index) => (
          <article
            key={index}
            className="flex flex-col items-center sm:flex-row  sm:justify-evenly  p-2 gap-2 w-full my-1 shadow-sm hover:shadow-xl border-b border-white/30"
          >
            <img
              className="rounded-full w-[55px] h-[55px]"
              src="/img/profile_default.webp"
              alt=""
            />
            <div className="text-center md:text-left sm:w-[42%] ">
              <h3 className="font-semibold text-base">{article.titles}</h3>
              <p className="text-[13px]">{article.description}</p>
              <p className="text-[13px]">{article.time}</p>
              <span className="text-[13px]">{article.location}</span>
            </div>
            <button className="text-[13px] font-normal rounded-md bg-[#B5FF16B2] mt-1 md:mt-0 w-[122px] h-[29px]">
              Solicitar unirme
            </button>
          </article>
        ))}
      </div>
    </>
  );
};

export default TeamBuilding;
