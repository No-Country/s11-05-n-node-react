import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyTeams } from "../../store/state/teamSlice";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineLoading } from "react-icons/ai";

export default function Teams() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.team.myTeams);
  const loading = useSelector(state => state.team.loading);

  useEffect(() => {
    dispatch(dispatch(listMyTeams));
  }, [dispatch]);

  return (
    <section>
      <span className="text-2xl font-semibold mb-2.5 block">Mis Equipos</span>
      {loading ? (
        <span className="flex items-center gap-2 text-xl mt-6 mb-2">
          <AiOutlineLoading size={20} className="animate-spin" /> Cargando
        </span>
      ) : teams?.length > 0 ? (
        <div className="flex flex-col gap-4">
          {teams.map((team, index) => (
            <button
              type="button"
              key={team?._id}
              className={
                "w-full flex items-center p-4 gap-5 rounded-xl relative overflow-hidden transition duration-200 hover:brightness-110" +
                (!index % 2
                  ? " bg-gradient-to-t bg-green-600/90 from-green-800/30"
                  : " bg-gradient-to-t bg-green-500/90 from-green-600/30")
              }
            >
              <span className="block absolute w-[60%] h-full ml-auto inset-x-0 bottom-0 bg-gradient-to-l from-green-900 to-transparent"></span>
              {team?.image ? (
                <img
                  className="w-[64px] md:w-[96px] h-fit my-auto rounded-xl overflow-hidden ring ring-white"
                  src={team?.image}
                  alt={"Foto de " + team?.name}
                  loading="lazy"
                />
              ) : (
                <HiUserGroup size={64} />
              )}

              <div className="flex flex-col text-left">
                <span className="text-2xl font-semibold">{team?.name}</span>
                <span className="text-lg">{team?.players?.length} Jugadores</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <span className="block text-xl mt-6 mb-2">No tienes equipos cargados.</span>
      )}
    </section>
  );
}
