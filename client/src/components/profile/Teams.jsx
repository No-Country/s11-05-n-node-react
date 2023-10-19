export default function Teams() {
  const data = [
    {
      id: 1593,
      name: "Los de Backend",
      position: "Delantero",
      team: "...",
      classified: "No Clasifico",
      image: "/img/profile_default.webp"
    },
    {
      id: 4239,
      name: "Los de Frontend",
      position: "Trasero",
      team: "...",
      classified: "Clasifico",
      image: "/img/profile_default.webp"
    }
  ];

  return (
    <div className="border rounded-2xl p-4 shadow-xl shadow-black/[3%]">
      <span className="text-xl font-semibold mb-2.5 block">Equipos</span>
      {Children.toArray(
        // eslint-disable-next-line react/prop-types
        data.map(e => (
          <div className="grid grid-cols-[35%,65%] mb-4 border-y py-4 gap-5">
            <img
              className="w-[64px] md:w-[96px] h-fit my-auto rounded-xl overflow-hidden ring ring-white"
              src={e.image}
              alt={"Foto de " + e.name}
              loading="lazy"
            />

            <div className="flex flex-col text-sm">
              <span>Nombre: {e.name}</span>
              <span>ID: {e.id}</span>
              <span>Posición: {e.position}</span>
              <span>Equipo: {e.team}</span>
              <span>Clasificación: {e.classified}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
