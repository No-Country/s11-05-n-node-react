import { useState } from "react";
import CreateTeam from "../components/Team/CreateTeam";
import LoadTeams from "../components/Team/LoadTeams";
import LoadPlayers from "../components/Team/LoadPlayers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMembers } from "../store/state/membersSlice";
import { useParams } from "react-router-dom";

function Matches() {
  const members = useSelector(state => state.members.listMembers);

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const { type } = useParams();

  useEffect(() => {
    dispatch(dispatch(listMembers));
  }, []);

  return (
    <section className="flex  flex-col gap-5   max-w-screen-lg w-full mx-auto mb-10">
      <div className="flex flex-col gap-5">
        <h2>My Teams {type}</h2>
        <button onClick={() => setShow(!show)}>{!show ? "Add team" : "Close"} </button>
        <LoadTeams type={type} />

        <CreateTeam setShow={setShow} />

        {show ? <LoadPlayers members={members} /> : ""}
      </div>
    </section>
  );
}

export default Matches;
