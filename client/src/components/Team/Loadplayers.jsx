import { AiOutlinePlusCircle } from "react-icons/ai";

function Loadplayers() {
  const loadUsers = () => {
    const users = [];

    for (let index = 0; index < 12; index++) {
      users.push(
        <div className="w-16 h-16 rounded-full border-2 border-blue-500 bg-slate-300 relative">
          <button className="absolute bottom-0 right-0">
            {" "}
            <AiOutlinePlusCircle />
          </button>
        </div>
      );
    }

    return users;
  };

  return (
    <div className="w-[500px] flex flex-col gap-3 p-12 bg-blue-50 shadow-md rounded-lg  ">
      <h1 className="font-semibold">Seleccione sus miembros</h1>

      <div className="flex flex-col justify-center">
        {/* container ////////////////////////// */}
        <div className="flex flex-wrap gap-8 justify-center  items-center mb-12 p-2">
          {loadUsers()}
        </div>

        <button className="w-[60%] mx-auto  bg-slate-300 p-1 rounded-md mt-3">Añadir</button>
      </div>
    </div>
  );
}

export default Loadplayers;
