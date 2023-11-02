import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyTeams } from "../../store/state/teamSlice";
import TeamAvatar from "./TeamAvatar";

function LoadTeams() {
  const teams = useSelector(state => state.team.myTeams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatch(listMyTeams));
  }, []);

  return (
    <>
      <h2 className="font-semibold">Mis equipos</h2>
      <div className="flex flex-wrap bg-blue-50 gap-7  p-6 w-full  shadow-md rounded-md justify-center">
        {teams.length > 0 ?   teams.map(team => (
          <div key={team._id}>
            <TeamAvatar team={team} />
          </div>
        )) : <p>Aún no tienes equipos creados</p>}
      </div>
    </>
  );
}

export default LoadTeams;
