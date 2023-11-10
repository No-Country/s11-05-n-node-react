import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listTeams } from "../store/state/teamSlice";
import LoadTeams from "../components/Team/LoadTeams";
import CreateMatches from "../components/Matches/CreateMatches";
import LoadTeamsMatches from "../components/Matches/LoadTeamsMatches";

function Matches() {
  const teamSelected = useSelector(state => state.team.teamSelected);
  const teams = useSelector(state => state.team.listTeams);

  const [show, setShow] = useState(false);

  const [showTeam, setShowTeam] = useState([]);

  const dispatch = useDispatch();
  const { type } = useParams();

  useEffect(() => {
    dispatch(dispatch(listTeams));
  }, []);

  useEffect(() => {
    if (teamSelected?._id) {
      const teamEqual = teams?.filter(team => team?.category?._id === teamSelected?.category?._id);
      setShowTeam(teamEqual);
    }
  }, [teamSelected]);

  useEffect(() => {
    if (type) {
      setShowTeam(teams);
    }
  }, [type]);

  return (
    <section className="flex  flex-col max-w-screen-lg w-full ">
      <div className="flex flex-col gap-5">
        <h2 className="text-white text-lg">
          {type === "sport" ? "Partidos Presenciales" : "Partidas Online"}
        </h2>
        <LoadTeams type={type} />
        <div className="flex gap-6">
          <CreateMatches setShow={setShow} />

          {show ? <LoadTeamsMatches teams={showTeam} type={type} /> : ""}
        </div>
      </div>
    </section>
  );
}

export default Matches;
