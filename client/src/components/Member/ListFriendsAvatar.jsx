/* eslint-disable react/prop-types */
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addFriend, deleteFriend } from "../../store/state/authSlice";

const ListFriendsAvatar = ({ member }) => {
  const friends = useSelector(state => state.auth.user.friends);

  const dispatch = useDispatch();

  const isSelected = () => {
    return friends && friends.findIndex(item => item === member) !== -1 ? true : false;
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
        className="rounded-full object-cover w-full h-full"
      />
      {isSelected() ? (
        <button
          className="absolute -bottom-2 -right-4"
          onClick={() => dispatch(deleteFriend(member._id))}
        >
          <AiFillHeart color="red" size={32} className="rounded-full" />
        </button>
      ) : (
        <button
          className="absolute -bottom-2 -right-4"
          onClick={() => dispatch(addFriend(member._id))}
        >
          <AiFillHeart color="#b5ff16" size={32} className="rounded-full" />
        </button>
      )}
      <div className="flex justify-center text-center">
        <span className="text-center truncate">{member.nickName}</span>
      </div>
    </div>
  );
};

export default ListFriendsAvatar;
