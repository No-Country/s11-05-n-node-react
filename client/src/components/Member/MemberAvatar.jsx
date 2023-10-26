/* eslint-disable react/prop-types */
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addMemberToSelect, removeMemberFromSelect } from "../../store/state/membersSlice";

const MemberAvatar = ({ member }) => {
  const membersSelected = useSelector(state => state.members.listMembersSelected);
  const dispatch = useDispatch();

  const addMemberToList = memberSelected => {
    dispatch(addMemberToSelect(memberSelected));
  };

  const removeMemberToList = idMember => {
    dispatch(removeMemberFromSelect(idMember));
  };

  const isSelected = () => {
    return membersSelected && membersSelected.findIndex(item => item === member) !== -1
      ? true
      : false;
  };

  return (
    <div
      id={member._id}
      className="w-16 h-16 justify-center rounded-full border-2 border-blue-500 bg-slate-300 mt-4 relative"
    >
      <img
        src={member.avatar || "/img/profile_default.webp"}
        onError={e => {
          e.target.src = "/img/profile_default.webp";
        }}
        alt={member.firstName}
        className="rounded-full"
      />
      {isSelected() ? (
        <button
          className="absolute bottom-0 right-0"
          onClick={() => removeMemberToList(member._id)}
        >
          <AiOutlineMinusCircle className=" bg-red-500 rounded-full" />
        </button>
      ) : (
        <button className="absolute bottom-0 right-0" onClick={() => addMemberToList(member)}>
          <AiOutlinePlusCircle className=" bg-green-500 rounded-full" />
        </button>
      )}
      <div className="flex justify-center text-center">
        <span className="text-center truncate">{member.nickName}</span>
      </div>
    </div>
  );
};

export default MemberAvatar;
