/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyTeams } from "../../store/state/teamSlice";
import TeamAvatar from "./TeamAvatar";

function LoadTeams({ type }) {
  const teams = useSelector(state => state.team.myTeams);
  const dispatch = useDispatch();
  const showTeams = () => {
    if (type === "sport" || type === "game")
      return teams?.filter(team => team?.category?.type === type);
    return teams;
  };

  useEffect(() => {
    dispatch(dispatch(listMyTeams));
  }, []);

  return (
    <>
      <h2 className="font-semibold">Mis equipos</h2>
      <div className="flex flex-wrap bg-black gap-7  p-6 w-full  shadow-md rounded-md justify-center">
        {showTeams()?.map(team => (
          <div key={team._id}>
            <TeamAvatar team={team} />
          </div>
        ))}
      </div>
    </>
  );
}

export default LoadTeams;
