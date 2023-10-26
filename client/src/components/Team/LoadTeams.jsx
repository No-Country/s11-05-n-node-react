import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyTeams } from "../../store/state/teamSlice";
import TeamAvatar from "./TeamAvatar";

function LoadTeams() {
  const teams = useSelector(state => state.team.myTeams);
  console.log(teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatch(listMyTeams));
  }, []);

  // const loadTeams = () => {
  //   const teams = [];

  //   for (let index = 0; index < 3; index++) {
  //     teams.push(
  //       <div key={index} className="flex flex-col justify-center items-center">
  //         <div className="w-16 h-16 rounded-full border-2 border-blue-500 bg-slate-300 "></div>

  //         <p>Nombre equipo</p>
  //       </div>
  //     );
  //   }

  //   return teams;
  // };

  return (
    <>
      <h2 className="font-semibold">Mis equipos</h2>
      <div className="bg-blue-50 flex gap-8  p-6 w-full  shadow-md rounded-md">
        {teams?.map(team => (
          <div key={team._id}>
            <TeamAvatar team={team} />
          </div>
        ))}
      </div>
    </>
  );
}

export default LoadTeams;
