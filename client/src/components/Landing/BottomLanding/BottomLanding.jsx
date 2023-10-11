import { useState } from "react"

export default function LandingBottom() {
  const [desktopBG, setDesktopBG] = useState('bg_1.png')

  return (
    <>
      <section className="mx-auto mt-40 grid w-[90%] max-w-screen-xl gap-10 rounded-3xl border border-black/[3%] px-10 py-12 shadow-xl md:grid-cols-2">
        <img src="img/landing_3.avif" className="h-full w-full rounded-md object-cover" alt="Foto de representación de varios deportes" />
        <div className="mx-auto my-auto flex h-fit flex-col gap-14 md:w-[80%]">
          <span className="text-3xl font-bold md:text-4xl">{"Instala Let's play o regístrate en web y vive tu propia experiencia"}</span>

          <button type="button" className="pressable -mb-8 rounded-lg bg-black py-2.5 text-lg font-semibold text-white md:text-xl" aria-describedby="Unite a la pagina haciendo click aca">Empecemos</button>

          <div className="mx-auto grid max-w-sm grid-cols-2 items-center gap-5 max-md:place-items-end">
            <img src="/img/google_badge.png" className="pressable object-contain" alt="Descargalo en Google Play Store" />
            <img src="/img/apple_badge.png" className="pressable object-contain" alt="Descargalo en la App Store" />
          </div>
        </div>
      </section>

      <section className="mx-auto my-40 grid w-[90%] max-w-screen-xl gap-28 pb-44 md:grid-cols-2">
        <div>
          <button onMouseOver={() => setDesktopBG('bg_2.png')} className="max-w-xs rounded-3xl border border-black/[3%] p-7 text-xl font-medium shadow-xl transition duration-300 hover:scale-105" aria-description="Crea tu cuenta de manera rapida y sencilla.">Crea tu cuenta de manera rapida y sencilla.</button>
          <button onMouseOver={() => setDesktopBG('bg_1.png')} className="mx-auto mt-5 block max-w-xs rounded-3xl border border-black/[3%] p-7 text-xl font-medium shadow-xl transition duration-300 hover:scale-105" aria-description="Arma tu equipo y agrega nuevos compañeros.">Arma tu equipo y agrega nuevos compañeros.</button>
          <button onMouseOver={() => setDesktopBG('bg_2.png')} className="ml-auto mt-5 block max-w-xs rounded-3xl border border-black/[3%] p-7 text-xl font-medium shadow-xl transition duration-300 hover:scale-105" aria-description="Planea y disfruta tus torneos en esta web.">Planea y disfruta tus torneos en esta web.</button>
        </div>
        <div className="relative w-full">
          <img src="img/iphone14.png" style={{ backgroundImage: "url(img/phone.png)" }} className="fillMobile w-full max-w-[196px] overflow-hidden rounded-3xl drop-shadow-2xl max-[420px]:max-w-[128px] md:rounded-[2.15rem]" alt="Pagina desde el celular" />

          <img src="img/macbook.png" style={{ backgroundImage: `url(img/${desktopBG})` }} className="fillDesktop absolute -bottom-32 right-0 w-full max-w-lg drop-shadow-2xl" alt="Pagina desde la notebook" />
        </div>
      </section>
    </>
  )
}