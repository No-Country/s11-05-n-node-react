import { Children } from "react";

export default function Habilities() {
  const data = [
    {
      image: "/img/profile_default.webp",
      hability: "Ofensiva",
      level: 2.45
    },
    {
      image: "/img/profile_default.webp",
      hability: "Presión",
      level: 5.45
    },
    {
      image: "/img/profile_default.webp",
      hability: "Defensiva",
      level: 8.45
    }
  ];

  return (
    <div className="border rounded-2xl p-4 shadow-xl shadow-black/[3%]">
      <span className="text-xl font-semibold mb-2.5 block">Habilidades</span>
      {Children.toArray(
        // eslint-disable-next-line react/prop-types
        data.map(e => (
          <div className="grid grid-cols-[35%,65%] mb-4 border-y py-4 gap-5 items-center">
            <img
              className="w-[64px] h-fit my-auto rounded-xl overflow-hidden ring ring-white"
              src={e.image}
              alt="Foto de Habilidad"
              loading="lazy"
            />

            <div className="flex flex-col text-sm">
              <span>{e.hability}</span>
              <span>{e.level}%</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
