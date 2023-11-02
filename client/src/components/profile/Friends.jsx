import { Children, useState } from "react";

/* eslint-disable react/prop-types */
export default function Friends({ friends }) {
  const [showMoreFriends, setShowMoreFriends] = useState(false)

  const friendss = [
    {
      avatar: "/img/profile_default.webp",
      firstName: "Victor"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Dario"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Exequiel"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Alex"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Miguel"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Gustavo"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Irene"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Maciel"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Karem"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Marce"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Hugo"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Miguel 2"
    },
    {
      avatar: "/img/profile_default.webp",
      firstName: "Yein"
    }
  ]

  if (!friends) {
    return null
  }

  return (
    <section>
      <span className="font-semibold text-2xl">Amigos</span>
      {
        friendss?.length > 0 ?
          <div className="flex items-center gap-3 flex-wrap">
            {
              Children.toArray(
                friendss.slice(0, 4).map(friend => (
                  <div className="flex flex-col gap-1 items-center text-sm font-medium mt-2">
                    <img
                      className="w-full max-w-[56px] aspect-square object-cover rounded-full overflow-hidden"
                      src={friend.avatar}
                      alt={"Foto de " + friend.firstName}
                      loading="lazy"
                    />
                    {friend.firstName}
                  </div>
                )))
            }
            {
              showMoreFriends ?
                Children.toArray(
                  friendss.slice(4).map(friend => (
                    <div className="flex flex-col gap-1 items-center text-sm font-medium mt-2">
                      <img
                        className="w-full max-w-[56px] aspect-square object-cover rounded-full overflow-hidden"
                        src={friend.avatar}
                        alt={"Foto de " + friend.firstName}
                        loading="lazy"
                      />
                      {friend.firstName}
                    </div>
                  )))
                :
                null
            }
            {
              friendss?.length > 4 ?
                <button className="ml-1 text-[#B5FF16] font-semibold border-b-2 border-b-[#B5FF16]" onClick={() => setShowMoreFriends(!showMoreFriends)}>{showMoreFriends ? "Ver Menos" : "Ver Mas"}</button>
                :
                null
            }
          </div>
          :
          <p className="font-medium mt-1">Tus amigos se veran reflejados en esta sección.</p>
      }
    </section>
  );
}
