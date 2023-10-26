import { useState } from "react";
import CreateTeam from "../components/Team/CreateTeam";
import LoadTeams from "../components/Team/LoadTeams";
import Loadplayers from "../components/Team/Loadplayers";

function Team() {
  const [show, setShow] = useState(false);

  return (
    <section className="flex  flex-col gap-5   max-w-screen-lg w-full mx-auto mb-10">
      <div className="flex gap-5">
        <CreateTeam setShow={setShow} />

        {show ? <Loadplayers /> : ""}
      </div>
      <LoadTeams />
    </section>
  );
}

export default Team;
