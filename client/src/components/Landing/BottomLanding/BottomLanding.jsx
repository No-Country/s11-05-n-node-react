import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingBottom() {
  const [customBG, setCustomBG] = useState(1);

  return (
    <>
      <section className="mx-auto mt-40 grid w-[90%] max-w-screen-xl rounded-3xl overflow-hidden lg:grid-cols-2">
        <div className="relative">
          <span className="block absolute w-full lg:w-[30%] lg:h-full h-[40%] lg:ml-auto inset-x-0 bottom-0 bg-gradient-to-t lg:bg-gradient-to-l from-black to-transparent"></span>
          <img
            src="https://th.bing.com/th/id/OIG.JP5dGcyHMBa5BVxyk7dC?pid=ImgGn"
            className="h-full w-full object-cover"
            alt="Foto de partido de futbol"
          />
        </div>
        <div className="mx-auto my-auto flex items-center justify-center h-full flex-col lg:p-8 gap-20">
          <span className="text-5xl lg:text-4xl font-semibold xl:text-6xl xl:max-w-[80%]">
            {"Unite a Let's Play y disfruta de tu deporte favorito."}
          </span>

          <Link
            to="/register"
            aria-label="Empezar a Jugar"
            className="block text-3xl py-5 px-8 bg-gradient-to-b from-[#B5FF16] to-green-600 w-fit text-black rounded-2xl font-medium pressable mx-auto"
          >
            Empeza a Jugar
          </Link>
        </div>
      </section>

      <section className="mx-auto my-40 grid w-[90%] max-w-screen-xl gap-28 pb-44 md:grid-cols-2">
        <div>
          <button
            onMouseOver={() => setCustomBG(2)}
            className="max-w-xs rounded-3xl rounded-br-none text-black/90 bg-gradient-to-t from-white to-slate-200/90 py-7 px-3 text-xl font-semibold shadow-xl transition duration-300 hover:scale-105"
            aria-description="Crea tu cuenta de manera rapida y sencilla."
          >
            Crea tu cuenta de manera rapida y sencilla.
          </button>
          <button
            onMouseOver={() => setCustomBG(1)}
            className="mx-auto mt-5 block max-w-xs rounded-3xl rounded-br-none text-black/90 bg-gradient-to-t from-white to-slate-200/90 py-7 px-3 text-xl font-semibold shadow-xl transition duration-300 hover:scale-105"
            aria-description="Arma tu equipo y agrega nuevos compañeros."
          >
            Arma tu equipo y agrega nuevos compañeros.
          </button>
          <button
            onMouseOver={() => setCustomBG(2)}
            className="ml-auto mt-5 block max-w-xs rounded-3xl rounded-br-none text-black/90 bg-gradient-to-t from-white to-slate-200/90 py-7 px-3 text-xl font-semibold shadow-xl transition duration-300 hover:scale-105"
            aria-description="Planea y disfruta tus torneos en esta web."
          >
            Planea y disfruta tus torneos en esta web.
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="/img/iphone14.png"
            style={{ backgroundImage: `url(/img/phone_${customBG}.png)` }}
            className="fillMobile w-full max-w-[196px] overflow-hidden rounded-3xl drop-shadow-2xl max-[420px]:max-w-[128px] md:rounded-[2.15rem]"
            alt="Pagina desde el celular"
          />

          <img
            src="/img/macbook.png"
            style={{ backgroundImage: `url(/img/bg_${customBG}.webp)` }}
            className="fillDesktop absolute -bottom-32 right-0 w-full max-w-lg drop-shadow-2xl"
            alt="Pagina desde la notebook"
          />
        </div>
      </section>
    </>
  );
}
