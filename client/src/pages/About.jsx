import { AiFillLinkedin, AiFillGithub, AiFillBehanceSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

function About() {
  const devs = [
    {
      id: 1,
      name: "Dario Elguero",
      image: "https://avatars.githubusercontent.com/u/73416791?v=4",
      github: "https://github.com/Dario-Elguero",
      behance: null,
      linkedin: "https://www.linkedin.com/in/dario-elguero",
      role: "Frontend"
    },
    {
      id: 2,
      name: "Alexander Mamani",
      image: "https://avatars.githubusercontent.com/u/72415956?v=4",
      github: "https://github.com/alexqs96",
      behance: null,
      linkedin: "https://www.linkedin.com/in/alexander-mamani/",
      role: "Frontend"
    },
    {
      id: 3,
      name: "Victor Fernandez",
      image: "https://avatars.githubusercontent.com/u/96598305?v=4",
      github: "https://github.com/vic-ferr",
      behance: null,
      linkedin: "https://www.linkedin.com/in/victor-h-fernandez-p",
      role: "Frontend"
    },
    {
      id: 4,
      name: "Exequiel Schiavo",
      image: "https://avatars.githubusercontent.com/u/89054682?v=4",
      github: "https://github.com/Exeq10",
      behance: null,
      linkedin: "https://www.linkedin.com/in/exequiel-schiavo",
      role: "Frontend"
    },
    {
      id: 5,
      name: "Yein España",
      image:
        "https://cdn.discordapp.com/avatars/906564650240466996/513cc1b5ed82e339d0c1e9a345ecfbce.webp?size=240",
      github: "https://github.com/yeinwillie",
      behance: null,
      linkedin: "https://www.linkedin.com/in/yein-e-734a7a233/",
      role: "Backend"
    },
    {
      id: 6,
      name: "Miguel Beltran",
      image: "https://avatars.githubusercontent.com/u/55055505?v=4",
      github: "https://github.com/miguelbel00",
      behance: null,
      linkedin: "https://www.linkedin.com/in/miguelbel00",
      role: "Backend"
    },
    {
      id: 7,
      name: "Miguel Guerrero",
      image: "https://avatars.githubusercontent.com/u/91755159?v=4",
      github: "https://github.com/Eiine",
      behance: null,
      linkedin: "https://www.linkedin.com/in/miguel-guerrero-403939194",
      role: "Backend"
    },
    {
      id: 8,
      name: "Hector Dario Sol",
      image: "https://avatars.githubusercontent.com/u/95602009?v=4",
      github: "https://github.com/hectordsol",
      behance: null,
      linkedin: "https://linkedin.com/in/hectordariosol",
      role: "Backend"
    },
    {
      id: 9,
      name: "Masiel Venegas",
      image: "https://avatars.githubusercontent.com/u/117475988?v=4",
      github: "https://github.com/m-venegas",
      behance: null,
      linkedin: "https://www.linkedin.com/in/masielvenegas",
      role: "Backend"
    },
    {
      id: 10,
      name: "Gustavo Cubilla",
      image:
        "https://media.licdn.com/dms/image/D4D35AQGsZMpXXEJdVw/profile-framedphoto-shrink_400_400/0/1696365436483?e=1699563600&v=beta&t=KMzeg15B7hgarzCookXZ8kQX8jkPXqMWTjmUfDG_kc0",
      github: "https://github.com/Cubilla-Dev",
      behance: null,
      linkedin: "https://www.linkedin.com/in/cubilla-dev",
      role: "Backend"
    },
    {
      id: 11,
      name: "Karem Carranza",
      image:
        "https://pps.services.adobe.com/api/profile/D8FD0BB85C30A9870A495DE8@AdobeID/image/ee919a99-887c-4e3d-aed8-0194d83aa7c9/230",
      github: null,
      behance: "https://www.behance.net/karemcarranza",
      linkedin: "https://www.linkedin.com/in/karemcarranza",
      role: "UX/UI"
    },
    {
      id: 12,
      name: "Marcela Ruiz",
      image:
        "https://media.licdn.com/dms/image/D4E03AQE8jx0CFEjb6g/profile-displayphoto-shrink_400_400/0/1691432030137?e=1704326400&v=beta&t=06b18VWYbN9WCCkxAVdYi9y8TXWtqjx7p3Zv097evfY",
      github: null,
      behance: null,
      linkedin: "https://www.linkedin.com/in/m-rruiz",
      role: "PM"
    },
    {
      id: 13,
      name: "Irene Vargas",
      image: "https://avatars.githubusercontent.com/u/90365928?v=4",
      github: "https://github.com/IreneVargas",
      behance: null,
      linkedin: "https://www.linkedin.com/in/irene-vargas/",
      role: "QA"
    },
    {
      id: 14,
      name: "Nuri Victoria Tasilla Uceda",
      image:
        "https://media.licdn.com/dms/image/D4E35AQErjfv86pgHeg/profile-framedphoto-shrink_800_800/0/1670791559162?e=1699563600&v=beta&t=QB2AvlXN9Elw4GMA5mBLZp1V7W-QvsV5LJFNcWwNVKY",
      github: null,
      behance: null,
      linkedin: "https://www.linkedin.com/in/nurivictoria",
      role: "TL"
    }
  ];

  return (
    <section className="text-white max-w-screen-xl w-[85%] mx-auto my-10 flex flex-col gap-10 background-circle">
      <h1 className="text-5xl max-sm:text-center sm:text-6xl font-bold -tracking-wide">
        <span className="text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white">
          {"Team Let's"}
        </span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-t from-green-700 via-[#B5FF16] to-[#B5FF16]">
          Play
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full h-fit gap-5">
        {devs.map(dev => (
          <div
            key={dev.id}
            className="flex flex-col gap-2 border bg-neutral-950 border-white/10 p-4 rounded-2xl font-mono transition duration-200 hover:border-white/20 hover:bg-neutral-900"
          >
            <img
              className="w-full h-full aspect-square rounded-xl object-cover"
              onError={e => {
                e.target.src = "/img/profile_default.webp";
              }}
              src={dev.image}
              alt={"Foto de " + dev.name}
              title={"Foto de " + dev.name}
            />
            <div>
              <span className="block text-xl truncate font-medium" title={dev.name}>
                {dev.name}
              </span>

              <div className="flex flex-wrap gap-2 justify-between mt-1.5">
                <span className="bg-slate-900 border border-white/20 py-0.5 px-2.5 rounded-md block w-fit text-sm">
                  {dev.role}
                </span>
                <div className="flex flex-wrap gap-1.5 w-fit">
                  {dev.linkedin ? (
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Perfil de Linkedin"
                      title="Agregame en Linkedin"
                    >
                      <AiFillLinkedin size={24} />
                    </a>
                  ) : null}
                  {dev.github ? (
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Perfil de Github"
                      title="Agregame en Github"
                    >
                      <AiFillGithub size={24} />
                    </a>
                  ) : null}
                  {dev.behance ? (
                    <a
                      href={dev.behance}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Perfil de Behance"
                      title="Agregame en Behance"
                    >
                      <AiFillBehanceSquare size={24} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/"
        className="ml-auto pressable bg-gradient-to-b from-[#B5FF16] to-green-600 text-black/90 text-lg w-fit py-2 px-4 rounded-md font-medium"
      >
        Volver al Inicio
      </Link>
    </section>
  );
}

export default About;
