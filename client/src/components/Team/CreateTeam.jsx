import { AiOutlinePlusCircle } from "react-icons/ai";

function CreateTeam({ setShow }) {
  return (
    <div className="w-[500px] flex flex-col gap-3 p-12 bg-blue-50 shadow-md rounded-lg  ">
      <h1 className="font-semibold">Crea tu equipo</h1>

      <form className="flex flex-col justify-center gap-5">
        <div className="flex flex-col w-[95%] mt-6 gap-1">
          <label className="text-sm">Nombre</label>
          <input type="text " className="w-[393px]  p-2 h-12 rounded-lg" />
        </div>
        <div className="flex flex-col w-[95%] gap-1">
          <label className="text-sm">Selecciona juego</label>
          <select className="w-[393px] h-12 rounded-lg p-2">
            <optgroup>
              <option value="0">Selecciona tu juego </option>
            </optgroup>
          </select>
        </div>
      </form>

      <h2 className="font-normal text-sm mt-5">Añadir miembros </h2>

      <div className="flex flex-col justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-blue-500 bg-slate-300 relative">
          <button className="absolute bottom-0 right-0">
            {" "}
            <AiOutlinePlusCircle />
          </button>
        </div>

        <button
          className="w-[60%] mx-auto  bg-slate-300 p-1 rounded-md mt-3"
          onClick={() => setShow(true)}
        >
          Crear
        </button>
      </div>
    </div>
  );
}

export default CreateTeam;
