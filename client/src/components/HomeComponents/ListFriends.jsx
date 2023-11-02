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
    <div className="max-w-[494px] flex flex-col gap-3 p-6 bg-[#121212] shadow-md rounded-lg border border-white/10 ">
      <div className="flex flex-col justify-center max-h-[30rem]  ">
        <h2 className="font-semibold">Favoritos</h2>

        <div className="flex flex-wrap gap-8 justify-center h-auto overflow-auto items-center p-2 min-h-[8rem]">
          {friends?.length > 0 ? (
            friends?.map(friend => {
              return (
                <div key={`${friend?._id}-friend`}>
                  <ListFriendsAvatar member={friend} />
                </div>
              );
            })
          ) : (
            <span className=" text-white ">Aun no tienes favoritos</span>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center max-h-[30rem]">
        <h2 className="font-semibold">Jugadores recientes</h2>
        <div className="flex flex-wrap gap-8 justify-center h-full overflow-auto items-center p-2">
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
