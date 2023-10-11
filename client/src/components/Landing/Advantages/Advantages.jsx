import { IoGameControllerOutline } from "react-icons/io5";
import { BiFootball } from "react-icons/bi";

const Advantages = () => {
  const dataCard = [
    {
      id: 1,
      title: "No importa si eres Gamer o Deportista",
      description:
        "Aquí podrás ingresar tus preferencias y encontrar a gente con tus mismos gustos",
    },
    {
      id: 2,
      title: "¿Tienes un equipo?",
      description:
        "Crea tu perfil y cárga todos tus equipos para tus juegos online o tus deportes",
    },
    {
      id: 3,
      title: "¿se cancela tu noche de juegos?",
      description:
        "Que te falte un compañero ya no es problema, solicita a alguien disponible y haz nuevos amigos!",
    },
  ];

  return (
    <div className="flex w-full justify-center mt-8">
      <div className="flex-col w-[1230px]">
        <span className="flex w-full justify-center text-[2.25rem] my-32">
          ¿Por que es mejor con Lets play?
        </span>
        <div className="flex justify-between gap-6">
          {dataCard.map((card) => {
            return (
              <div
                key={card.id}
                className="border-2 p-6 rounded-3xl w-[20rem] h-[20.8125rem] shadow-lg shadow-gray-500"
              >
                <div className="flex w-full justify-center gap-4">
                  <IoGameControllerOutline size={40} />
                  <BiFootball size={40} />
                </div>
                <h2 className="font-semibold text-[1.25rem] my-6">
                  {card.title}
                </h2>
                <span className="text-lg">{card.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
