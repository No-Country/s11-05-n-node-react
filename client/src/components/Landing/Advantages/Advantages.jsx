/* eslint-disable no-unused-vars */
import { IoGameControllerOutline } from "react-icons/io5";
import { BiFootball } from "react-icons/bi";

const AdvantagesWire = () => {
  const dataCard = [
    {
      id: 1,
      title: "No importa si eres Gamer o Deportista",
      description: "Aquí podrás ingresar tus preferencias y encontrar a gente con tus mismos gustos"
    },
    {
      id: 2,
      title: "¿Tienes un equipo?",
      description: "Crea tu perfil y cárga todos tus equipos para tus juegos online o tus deportes"
    },
    {
      id: 3,
      title: "¿se cancela tu noche de juegos?",
      description:
        "Que te falte un compañero ya no es problema, solicita a alguien disponible y haz nuevos amigos!"
    }
  ];

  return (
    <div className="flex w-full justify-center mt-8">
      <div className="flex-col w-[1230px]">
        <span className="flex w-full justify-center text-[2.25rem] my-32">
          ¿Por que es mejor con Lets play?
        </span>
        <div className="flex justify-between gap-6">
          {dataCard.map(card => {
            return (
              <div
                key={card.id}
                className="border-2 p-6 rounded-3xl w-[20rem] h-[20.8125rem] shadow-lg shadow-gray-500"
              >
                <div className="flex w-full justify-center gap-4">
                  <IoGameControllerOutline size={40} />
                  <BiFootball size={40} />
                </div>
                <h2 className="font-semibold text-[1.25rem] my-6">{card.title}</h2>
                <span className="text-lg">{card.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Advantages = () => {
  const data = [
    {
      id: 1,
      image: "https://th.bing.com/th/id/OIG..ZpOsaIoayvPTnr30VGo?pid=ImgGn&w=1024&h=1024&rs=1",
      title: "¿Gamer o Deportista?",
      description: "Aquí podrás encontrar diversas actividades con gente que comparte tu interes."
    },
    {
      id: 2,
      image: "https://th.bing.com/th/id/OIG.l3ndaFz_a8WHIX_pOL1K?pid=ImgGn&w=1024&h=1024&rs=1",
      title: "¿Tienes un equipo?",
      description:
        "Crea tu perfil, cárga tus equipos y empeza a jugar, de las partidas se encarga Let's Play."
    },
    {
      id: 3,
      image: "https://th.bing.com/th/id/OIG.P6JygZ0P9zKvMsBtz6jD?pid=ImgGn&w=1024&h=1024&rs=1",
      title: "¿Te faltan jugadores?",
      description:
        "Que no te falte un jugador, solicita a alguien disponible y haz nuevos amigos!!."
    }
  ];

  return (
    <section className="max-w-screen-xl mx-auto w-[90%] flex flex-col gap-10 my-14">
      <h2 className="text-center text-4xl lg:text-5xl font-semibold my-10 -tracking-wide">
        ¿Por que es mejor con Lets Play?
      </h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {data.map(e => (
          <section key={e.id} className="flex flex-col gap-4 w-full group">
            <img
              className="aspect-square w-full h-full rounded-md object-cover max-h-[256px]"
              src={e.image}
              alt={e.title}
            />
            <span className="text-3xl font-semibold border-b-4 border-b-transparent group-hover:border-b-[#B5FF16] w-fit transition duration-150">
              {e.title}
            </span>
            <p className="text-lg font-medium">{e.description}</p>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Advantages;
