/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import MemberAvatar from "../Member/MemberAvatar";
import { useEffect, useState } from "react";
import { createTeam } from "../../store/state/teamSlice";
import { clearAllMembers } from "../../store/state/membersSlice";

function CreateTeam({ setShow }) {
  const dispatch = useDispatch();
  const membersSelected = useSelector(state => state.members.listMembersSelected);

  const [newTeam, setNewTeam] = useState({
    name: "",
    players: [],
    image: null
  });

  const createNewTeam = async () => {
    try {
      const team = await dispatch(createTeam(newTeam));
      if (team.message) {
        console.log("mewTeam", team.message);
        setNewTeam({ ...newTeam, name: "", image: null });
        dispatch(clearAllMembers());
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = e => {
    setNewTeam({ ...newTeam, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const idMembers = membersSelected.map(member => member._id);
    setNewTeam({ ...newTeam, players: idMembers });
  }, [membersSelected]);

  return (
    <div className="w-[500px] flex flex-col gap-3 p-12 bg-blue-50 shadow-md rounded-lg  ">
      <h1 className="font-semibold">Crea tu equipo</h1>

      <form className="flex flex-col justify-center gap-5">
        <div className="flex flex-col w-[95%] mt-6 gap-1">
          <label className="text-sm">Nombre</label>
          <input
            name="name"
            value={newTeam.name}
            type="text "
            className="w-[393px]  p-2 h-12 rounded-lg"
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="flex flex-col w-[95%] gap-1">
          <label className="text-sm">Selecciona juego</label>
          <select className="w-[393px] h-12 rounded-lg p-2">
            <optgroup>
              <option value="0">Selecciona tu juego </option>
            </optgroup>
          </select>
        </div>
      </form>

      <h2 className="font-normal text-sm mt-5">Añadir miembros </h2>

      <div className="flex gap-4 flex-wrap justify-center">
        <div className="flex justify-center items-center w-16 h-16 rounded-full border-2 border-blue-500 bg-slate-300 mt-4">
          <button className="" onClick={() => setShow(true)}>
            {" "}
            <AiOutlinePlusCircle size={35} className=" bg-green-500 rounded-full" />
          </button>
        </div>

        {membersSelected?.map(member => {
          return (
            <div key={member?._id}>
              <MemberAvatar member={member} />
            </div>
          );
        })}
      </div>
      <button className="w-[60%] mx-auto  bg-slate-300 p-1 rounded-md mt-8" onClick={createNewTeam}>
        Crear
      </button>
    </div>
  );
}

export default CreateTeam;
