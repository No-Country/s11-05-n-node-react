import { Link } from "react-router-dom";

const HeaderLanding = () => {
  return (
    <section className="max-w-screen-xl w-[90%] mx-auto grid items-center grid-cols-1 md:grid-cols-2 my-14">
      <div className="flex flex-col gap-5">
        <h1 className="text-7xl lg:text-8xl font-bold max-sm:-tracking-wider">
          <span>{"Let's"}</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-black via-[#B5FF16] to-[#B5FF16]">
            Play
          </span>
        </h1>

        <span className="text-2xl lg:text-3xl font-medium">¿Con quién queres jugar hoy?</span>

        <p className="max-w-[90%] lg:text-lg font-medium">
          {
            "Con Let's play encuentra compañeros para tus juegos online o deportes, de manera rápida y sencilla."
          }
        </p>

        <Link
          to="/register"
          aria-label="Empezar a Jugar"
          className="flex items-center py-3 px-6 bg-gradient-to-b from-[#B5FF16] to-green-600 w-fit text-black rounded-xl text-xl font-medium pressable"
        >
          Empeza a Jugar
        </Link>
      </div>

      <div className="relative max-md:hidden">
        <span className="block absolute h-[10%] w-full inset-x-0 top-0 bg-gradient-to-b from-black to-transparent"></span>
        <span className="block absolute w-[20%] h-full inset-x-0 bottom-0 bg-gradient-to-r from-black to-transparent"></span>
        <img
          className="w-full h-full object-cover rounded-3xl"
          src="https://th.bing.com/th/id/OIG.GKwaRCi573eSd2Gs9G8N?pid=ImgGn"
          alt="Lets Play Futbol"
        />
        <span className="block absolute w-[20%] h-full ml-auto inset-x-0 bottom-0 bg-gradient-to-l from-black to-transparent"></span>
        <span className="block absolute h-[30%] w-full inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent"></span>
      </div>
    </section>
  );
};

export default HeaderLanding;
