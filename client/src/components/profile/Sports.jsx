/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sports({ sports, title }) {
  const [showMoreSports, setShowMoreSports] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-2xl">{title}</span>
      {sports?.length > 0 ? (
        <div className="flex items-center gap-3 flex-wrap">
          {sports?.slice(0, 4).map(category => (
            <div
              key={category?._id}
              className="flex flex-col gap-1 items-center text-sm font-medium mt-2"
            >
              <img
                className="w-full max-w-[56px] aspect-square object-cover rounded-full overflow-hidden"
                src={category?.image}
                alt={"Foto de " + category?.name}
                loading="lazy"
              />
              {category?.name}
            </div>
          ))}

          {showMoreSports
            ? sports?.slice(4).map(category => (
                <div
                  key={category?._id}
                  className="flex flex-col gap-1 items-center text-sm font-medium mt-2"
                >
                  <img
                    className="w-full max-w-[56px] aspect-square object-cover rounded-full overflow-hidden"
                    src={category?.image}
                    alt={"Foto de " + category?.name}
                    loading="lazy"
                  />
                  {category?.name}
                </div>
              ))
            : null}

          {sports?.length > 4 ? (
            <button
              className="ml-1 text-[#B5FF16] font-semibold border-b-2 border-b-[#B5FF16]"
              onClick={() => setShowMoreSports(!showMoreSports)}
            >
              {showMoreSports ? "Ver Menos" : "Ver Mas"}
            </button>
          ) : null}
        </div>
      ) : (
        <>
          <span className="font-medium opacity-90">
            Aqui van los deportes que se han seleccionado.
          </span>

          <Link
            to="/onboarding"
            className="bg-gradient-to-b from-[#B5FF16] to-green-300 text-black py-1.5 px-3.5 rounded-md font-medium w-fit pressable mt-2"
            type="button"
          >
            Agregar {title}
          </Link>
        </>
      )}
    </div>
  );
}
