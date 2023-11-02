/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listTeams } from "../../store/state/teamSlice";
import TeamAvatarMatches from "./TeamAvatarMatches";

function LoadTeamsMatches({ teams, type }) {
  const dispatch = useDispatch();
  const showTeams = () => {
    if (type === "sport" || type === "game")
      return teams?.filter(team => team?.category?.type === type);
    return teams;
  };

  useEffect(() => {
    dispatch(listTeams());
  }, []);

  return (
    <>
      <div className="flex flex-wrap bg-black gap-7 border border-white  p-6 w-full  shadow-md rounded-md justify-center">
        {teams?.length > 0 ? (
          showTeams()?.map(team => (
            <div key={team._id}>
              <TeamAvatarMatches team={team} />
            </div>
          ))
        ) : (
          <p className="text-white">Aún no tienes equipos creados</p>
        )}
      </div>
    </>
  );
}

export default LoadTeamsMatches;
