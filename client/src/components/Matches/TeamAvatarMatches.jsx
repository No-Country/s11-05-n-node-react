/* eslint-disable react/prop-types */
import { RiTeamFill } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { BiFootball } from "react-icons/bi";
import { BsOutlet } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addTeamToSelect, removeTeamFromSelect } from "../../store/state/teamSlice";

const TeamAvatarMatches = ({ team }) => {
  const teamsSelected = useSelector(state => state.team.listTeamsSelected);
  const dispatch = useDispatch();

  const addTeamToList = memberSelected => {
    dispatch(addTeamToSelect(memberSelected));
  };

  const removeTeamToList = idMember => {
    dispatch(removeTeamFromSelect(idMember));
  };

  const isSelected = () => {
    return teamsSelected && teamsSelected?.findIndex(item => item === team) !== -1 ? true : false;
  };

  return (
    <>
      <div
        id={team?._id}
        className="flex w-16 h-16 justify-center items-center rounded-full border-2 border-blue-500 bg-slate-300 relative"
      >
        {team?.image ? (
          <img
            src={team?.image || "/img/profile_default.webp"}
            onError={e => {
              e.target.src = "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg";
            }}
            alt={team?.name}
            className="rounded-full w-full h-full object-cover"
          />
        ) : (
          <RiTeamFill size={42} color="#726d6d" />
        )}
        <div className="absolute -top-1 -right-3 bg-[#B5FF16] p-1 rounded-full">
          {team?.category?.type === "game" && <IoGameControllerOutline size={20} />}
          {team?.category?.type === "sport" && <BiFootball size={20} />}
          {!team?.category?.type && <BsOutlet size={20} />}
        </div>
        {isSelected() ? (
          <button className="absolute bottom-0 right-0" onClick={() => removeTeamToList(team?._id)}>
            <AiOutlineMinusCircle className=" bg-red-500 rounded-full" />
          </button>
        ) : (
          <button className="absolute bottom-0 right-0" onClick={() => addTeamToList(team)}>
            <AiOutlinePlusCircle className=" bg-green-500 rounded-full" />
          </button>
        )}
      </div>
      <div className="flex w-16 justify-center text-center">
        <span className="text-center text-white truncate">{team?.name}</span>
      </div>
    </>
  );
};

export default TeamAvatarMatches;
