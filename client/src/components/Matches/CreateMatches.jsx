/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearAllMembers } from "../../store/state/membersSlice";
import TeamAvatarMatches from "./TeamAvatarMatches";
import { createMatch } from "../../store/state/matchSlice";

function CreateMatches({ setShow }) {
  const dispatch = useDispatch();
  const teamsSelected = useSelector(state => state.team.listTeamsSelected);
  const teamSelected = useSelector(state => state.team.teamSelected);

  const [newMatch, setNewMatch] = useState({
    nameTeams: [], //ids teams
    date_play: new Date(),
    description: "",
    category: [] //idCategory
  });

  const createNewMatch = async () => {
    try {
      const matchNew = await dispatch(createMatch(newMatch));
      //   if (team.message) {
      //     await dispatch(clearAllMembers());
      //   }
      console.log(matchNew);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = e => {
    setNewMatch({ ...newMatch, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const idTeams = teamsSelected.map(team => team._id);
    setNewMatch({ ...newMatch, nameTeams: idTeams });
  }, [teamsSelected]);

  return (
    <div className="md:min-w-[500px] max-w-[500px] border border-white flex flex-col gap-3 p-12 bg-black shadow-md rounded-lg text-white ">
      <h1 className="font-semibold">Crea tu Match</h1>

      <form className="flex flex-col justify-center gap-5">
        <div className="flex flex-col w-[95%] mt-6 gap-1">
          <label className="text-sm">Descripción</label>
          <input
            name="description"
            value={newMatch.name}
            type="text "
            className="max-w-[393px] text-black p-2 h-12 rounded-lg"
            onChange={e => handleChange(e)}
          />
        </div>
        {/* <div className="flex flex-col w-[95%] gap-1">
          <label className="text-sm">Selecciona tu categoria</label>
          <select className="max-w-[393px] h-12 rounded-lg p-2">
            <optgroup>
              <option value="0">Selecciona tu juego </option>
            </optgroup>
          </select>
        </div> */}
      </form>

      <h2 className="font-normal text-sm mt-5">Añadir equipos </h2>

      <div className="flex gap-4 flex-wrap justify-center">
        <div className="flex justify-center items-center w-16 h-16 rounded-full border-2 border-blue-500 bg-slate-300 mt-4">
          <button className="" onClick={() => setShow(true)}>
            {" "}
            <AiOutlinePlusCircle size={35} className=" bg-green-500 rounded-full" />
          </button>
        </div>

        {teamsSelected?.map(team => {
          return (
            <div key={team?._id}>
              <TeamAvatarMatches team={team} />
            </div>
          );
        })}
      </div>
      <button
        className="w-[60%] mx-auto bg-gradient-to-b from-[#B5FF16] to-green-600 text-black/90 p-1 rounded-md mt-8"
        onClick={createNewMatch}
      >
        Crear
      </button>
    </div>
  );
}

export default CreateMatches;
