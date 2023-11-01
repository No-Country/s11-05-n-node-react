const Advantages = () => {
  const dataCards = [
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
        {dataCards.map(card => (
          <section key={card.id} className="flex flex-col gap-4 w-full group">
            <img
              className="aspect-square w-full h-full rounded-md object-cover max-h-[256px]"
              src={card.image}
              alt={card.title}
            />
            <span className="text-3xl font-semibold border-b-4 border-b-transparent group-hover:border-b-[#B5FF16] w-fit transition duration-150">
              {card.title}
            </span>
            <p className="text-lg font-medium">{card.description}</p>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Advantages;
