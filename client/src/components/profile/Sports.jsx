export default function Sports() {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-xl">Deportes</span>

      <span className="font-medium opacity-80">Aqui van los deportes que se han seleccionado.</span>

      <button
        className="bg-black py-1.5 px-3.5 rounded-md font-medium text-white w-fit pressable"
        type="button"
      >
        Editar Deportes
      </button>
    </div>
  );
}
