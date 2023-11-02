import { useState } from "react";
import CreateTeam from "../components/Team/CreateTeam";
import LoadTeams from "../components/Team/LoadTeams";
import LoadPlayers from "../components/Team/LoadPlayers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMembers } from "../store/state/membersSlice";

function Team() {
  const friends = useSelector(state => state.auth.user.friends);

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatch(listMembers));
  }, []);

  return (
    <section className="flex  flex-col gap-5   max-w-screen-lg w-full mx-auto mb-10">
      <LoadTeams />
      <div className="flex gap-5">
        <CreateTeam setShow={setShow} />

        {show ? <LoadPlayers members={friends} /> : ""}
      </div>
    </section>
  );
}

export default Team;
