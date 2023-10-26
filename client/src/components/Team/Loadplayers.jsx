/* eslint-disable react/prop-types */
import MemberAvatar from "../Member/MemberAvatar";

function LoadPlayers({ members }) {
  return (
    <div className="w-[500px] flex flex-col gap-3 p-12 bg-blue-50 shadow-md rounded-lg  ">
      <h1 className="font-semibold">Seleccione sus miembros</h1>

      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap gap-8 justify-center  items-center mb-12 p-2">
          {members?.map(member => {
            return (
              <div key={member?._id}>
                <MemberAvatar member={member} />
              </div>
            );
          })}
        </div>

        <button className="w-[60%] mx-auto  bg-slate-300 p-1 rounded-md mt-3">Añadir</button>
      </div>
    </div>
  );
}

export default LoadPlayers;
