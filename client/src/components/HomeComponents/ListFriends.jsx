/* eslint-disable react/prop-types */
import { Fragment } from "react";
import ListFriendsAvatar from "../Member/ListFriendsAvatar";

function ListFriends({ members, friends }) {
  const isNotFriend = idMember => {
    const exist = friends?.find(friend => friend?._id === idMember);
    if (exist) return false;
    return true;
  };

  return (
    <div className="max-w-[494px] flex flex-col gap-3 p-6 bg-[#121212] shadow-md rounded-lg border border-white/50 ">
      <div className="flex flex-col justify-center max-h-[30rem]  ">
        <h2 className="font-semibold text-xl">Mis Amigos</h2>

        <div className="flex flex-wrap gap-8 justify-center h-auto overflow-auto items-center p-4 min-h-[8rem]">
          {friends?.length > 0 ? (
            friends?.map(friend => {
              return (
                <div key={`${friend?._id}-friend`}>
                  <ListFriendsAvatar member={friend} />
                </div>
              );
            })
          ) : (
            <span className=" text-white ">Tus amigos apareceran aqui.</span>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center max-h-[30rem]">
        <h2 className="font-semibold text-xl mt-4">Comunidad</h2>
        <div className="flex flex-wrap gap-8 justify-center h-full overflow-auto items-center p-4">
          {members?.map(member => {
            return (
              <Fragment key={`${member._id}-member`}>
                {isNotFriend(member._id) && <ListFriendsAvatar member={member} />}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListFriends;
