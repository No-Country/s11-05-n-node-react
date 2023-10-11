import { useState } from "react"

export default function LandingBottom(){
  const [desktopBG, setDesktopBG] = useState('bg_1.png')

  return(
    <>
      <section className="border border-black/[3%] rounded-3xl shadow-xl px-10 py-12 grid md:grid-cols-2 gap-10 max-w-screen-xl mx-auto mt-40 w-[90%]">
        <img src="img/landing_3.avif" className="w-full h-full rounded-md object-cover" alt="Foto de representación de varios deportes"/>
        <div className="flex flex-col gap-14 h-fit my-auto md:w-[80%] mx-auto">
          <span className="text-3xl md:text-4xl font-bold">{"Instala Let's play o regístrate en web y vive tu propia experiencia"}</span>

          <button type="button" className="pressable bg-black -mb-8 text-white text-lg md:text-xl py-2.5 font-semibold rounded-lg" aria-describedby="Unite a la pagina haciendo click aca">Empecemos</button>

          <div className="grid grid-cols-2 max-w-sm gap-5 mx-auto items-center max-md:place-items-end">
            <img src="/img/google_badge.png" className="object-contain pressable" alt="Descargalo en Google Play Store" />
            <img src="/img/apple_badge.png" className="object-contain pressable" alt="Descargalo en la App Store" />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-28 max-w-screen-xl mx-auto my-40 w-[90%] pb-44">
        <div>
          <button onClick={() => setDesktopBG('bg_2.png')} className="pressable p-7 border border-black/[3%] rounded-3xl shadow-xl text-xl font-medium max-w-xs" aria-description="Crea tu cuenta de manera rapida y sencilla.">Crea tu cuenta de manera rapida y sencilla.</button>
          <button onClick={() => setDesktopBG('bg_1.png')} className="pressable mx-auto mt-5 block p-7 border border-black/[3%] rounded-3xl shadow-xl text-xl font-medium max-w-xs" aria-description="Arma tu equipo y agrega nuevos compañeros.">Arma tu equipo y agrega nuevos compañeros.</button>
          <button onClick={() => setDesktopBG('bg_2.png')} className="pressable ml-auto mt-5 block p-7 border border-black/[3%] rounded-3xl shadow-xl text-xl font-medium max-w-xs" aria-description="Planea y disfruta tus torneos en esta web.">Planea y disfruta tus torneos en esta web.</button>
        </div>
        <div className="relative w-full">
          <img src="img/iphone14.png" style={{backgroundImage: "url(img/phone.png)"}} className="max-[420px]:max-w-[128px] max-w-[196px] fillMobile w-full overflow-hidden rounded-3xl md:rounded-[2.15rem]" alt="Pagina desde el celular" />

          <img src="img/macbook.png" style={{backgroundImage: `url(img/${desktopBG})`}} className="max-w-lg w-full fillDesktop absolute -bottom-32 right-0" alt="Pagina desde la notebook" />
        </div>
      </section>
    </>
  )
}