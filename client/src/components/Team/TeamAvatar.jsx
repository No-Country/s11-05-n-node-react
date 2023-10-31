/* eslint-disable react/prop-types */
import { RiTeamFill } from "react-icons/ri";

const TeamAvatar = ({ team }) => {
  return (
    <>
      <div
        id={team._id}
        className="flex w-16 h-16 justify-center items-center rounded-full border-2 border-blue-500 bg-slate-300 relative"
      >
        {team.image ? (
          <img
            src={team.image || "/img/profile_default.webp"}
            onError={e => {
              e.target.src = "https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg";
            }}
            alt={team.name}
            className="rounded-full w-full h-full object-cover"
          />
        ) : (
          <RiTeamFill size={42} color="#726d6d" />
        )}
      </div>
      <div className="flex w-16 justify-center text-center">
        <span className="text-center truncate">{team.name}</span>
      </div>
    </>
  );
};

export default TeamAvatar;
