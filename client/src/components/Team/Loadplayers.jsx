/* eslint-disable react/prop-types */
import MemberAvatar from "../Member/MemberAvatar";

function LoadPlayers({ members }) {
  return (
    <div
      className="md:min-w-[500px]  max-w-[500px] border border-white text-white flex flex-col gap-3 p-12 bg-[ #121212;
    ]shadow-md rounded-lg  "
    >
      <h1 className="font-semibold">Seleccione sus miembros</h1>

      <div className="flex flex-col justify-center max-h-[30rem]">
        <div className="flex flex-wrap gap-8 justify-center h-full overflow-auto items-center p-2">
          {members?.map(member => {
            return (
              <div key={member?._id}>
                <MemberAvatar member={member} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LoadPlayers;
