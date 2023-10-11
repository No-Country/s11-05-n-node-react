export default function LandingBottom(){
  return(
    <>
      <section className="border border-black/10 rounded-3xl shadow-xl px-10 py-12 grid md:grid-cols-2 gap-10 max-w-screen-xl mx-auto mt-40 w-[90%]">
        <img src="img/landing_3.avif" className="w-full h-full rounded-md" alt="default landing 3"/>
        <div className="flex flex-col gap-14 h-fit my-auto md:w-[80%] mx-auto">
          <span className="text-4xl font-bold">Instala Let’s play o regístrate en web y vive tu propia experiencia</span>

          <button type="button" className="bg-black -mb-8 text-white text-xl py-2.5 font-semibold rounded-lg" aria-describedby="Unite a la pagina haciendo click aca">Empecemos</button>

          <div className="grid grid-cols-2 max-w-sm gap-5 mx-auto items-center max-md:place-items-end">
            <img src="/img/google_badge.png" className="object-contain" alt="Descargalo en Google Play Store" />
            <img src="/img/apple_badge.png" className="object-contain" alt="Descargalo en la App Store" />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 max-w-screen-xl mx-auto mt-40 w-[90%]">
        <div></div>
        <div className="relative w-full">
          <img src="img/iphone14.png" className="max-w-[196px] w-full" alt="Pagina desde el celular" />

          <img src="img/macbook.png" className="max-w-lg w-full absolute z-10 -bottom-32 right-0" alt="Pagina desde la notebook" />
        </div>
      </section>
    </>
  )
}