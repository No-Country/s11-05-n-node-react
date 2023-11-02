import { Children, useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Friends({ friends }) {
  const [showMoreFriends, setShowMoreFriends] = useState(false);

  return (
    <section>
      <span className="font-semibold text-2xl">Amigos</span>
      {friends.length > 0 && friends ? (
        <div className="flex items-center gap-3 flex-wrap">
          {Children.toArray(
            friends.slice(0, 4).map(friend => (
              <div className="flex flex-col gap-1 items-center text-sm font-medium mt-2">
                <img
                  onError={e => {
                    e.target.src = "/img/profile_default.webp";
                  }}
                  className="w-full max-w-[56px] aspect-square object-cover rounded-full overflow-hidden"
                  src={friend?.avatar || "/img/profile_default.webp"}
                  alt={"Foto de " + (friend?.firstName || friend?.nickName)}
                  loading="lazy"
                />
                {friend?.firstName || friend?.nickName}
              </div>
            ))
          )}
          {showMoreFriends
            ? Children.toArray(
                friends.slice(4).map(friend => (
                  <div className="flex flex-col gap-1 items-center text-sm font-medium mt-2">
                    <img
                      onError={e => {
                        e.target.src = "/img/profile_default.webp";
                      }}
                      className="w-full max-w-[56px] aspect-square object-cover rounded-full overflow-hidden"
                      src={friend?.avatar || "/img/profile_default.webp"}
                      alt={"Foto de " + (friend?.firstName || friend?.nickName)}
                      loading="lazy"
                    />
                    {friend?.firstName || friend?.nickName}
                  </div>
                ))
              )
            : null}
          {friends?.length > 4 ? (
            <button
              className="ml-1 text-[#B5FF16] font-semibold border-b-2 border-b-[#B5FF16]"
              onClick={() => setShowMoreFriends(!showMoreFriends)}
            >
              {showMoreFriends ? "Ver Menos" : "Ver Mas"}
            </button>
          ) : null}
        </div>
      ) : (
        <>
          <p className="font-medium mt-1">Tus amigos se veran reflejados en esta sección.</p>
          <Link
            to="/"
            className="bg-gradient-to-b from-[#B5FF16] to-green-300 text-black py-1.5 px-3.5 rounded-md font-medium w-fit pressable mt-3"
            type="button"
          >
            Agregar Amigos
          </Link>
        </>
      )}
    </section>
  );
}
