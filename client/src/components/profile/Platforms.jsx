export default function Platforms() {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-xl">Plataformas</span>

      <span className="font-medium opacity-80">
        Aqui va la plataforma en la que jugara el usuario (Desktop, Mobile).
      </span>

      <button
        className="bg-black py-1.5 px-3.5 rounded-md font-medium text-white w-fit pressable"
        type="button"
      >
        Editar Plataforma
      </button>
    </div>
  );
}
