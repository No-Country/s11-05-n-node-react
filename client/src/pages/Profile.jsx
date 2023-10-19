import { Children, useState } from "react";
import { BsFillCameraFill, BsPencilFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Friends() {
  return (
    <div>
      <span className="font-semibold text-xl">Amigos</span>
      <div className="flex gap-2.5 items-center overflow-hidden">
        <img
          className="w-[40px] h-full rounded-full border-2 border-pink-500"
          src="/img/profile_default.webp"
          alt={"Amigo 1"}
          loading="lazy"
        />
        <img
          className="w-[40px] h-full rounded-full border-2 border-pink-500"
          src="/img/profile_default.webp"
          alt={"Amigo 2"}
          loading="lazy"
        />
        <img
          className="w-[40px] h-full rounded-full border-2 border-pink-500"
          src="/img/profile_default.webp"
          alt={"Amigo 3"}
          loading="lazy"
        />
        <img
          className="w-[40px] h-full rounded-full border-2 border-pink-500"
          src="/img/profile_default.webp"
          alt={"Amigo 4"}
          loading="lazy"
        />
      </div>
    </div>
  );
}

function Sports() {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-xl">Deportes</span>

      <span className="font-medium opacity-80">Aqui van los deportes que se han seleccionado.</span>

      <button
        className="bg-black py-1.5 px-3.5 rounded-md font-medium text-white w-fit pressable"
        type="button"
      >
        Editar Deportes
      </button>
    </div>
  );
}

function Platforms() {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-xl">Plataformas</span>

      <span className="font-medium opacity-80">
        Aqui va la plataforma en la que jugara el usuario (Desktop, Mobile).
      </span>

      <button
        className="bg-black py-1.5 px-3.5 rounded-md font-medium text-white w-fit pressable"
        type="button"
      >
        Editar Plataforma
      </button>
    </div>
  );
}

function Social() {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-xl">Redes Sociales</span>

      <button
        className="bg-black py-1.5 px-3.5 rounded-md font-medium text-white w-fit pressable"
        type="button"
      >
        Editar Redes Sociales
      </button>
    </div>
  );
}

function Teams() {
  const data = [
    {
      id: 1593,
      name: "Los de Backend",
      position: "Delantero",
      team: "...",
      classified: "No Clasifico",
      image: "/img/profile_default.webp"
    },
    {
      id: 4239,
      name: "Los de Frontend",
      position: "Trasero",
      team: "...",
      classified: "Clasifico",
      image: "/img/profile_default.webp"
    }
  ];

  return (
    <div className="border rounded-2xl p-4 shadow-xl shadow-black/[3%]">
      <span className="text-xl font-semibold mb-2.5 block">Equipos</span>
      {Children.toArray(
        // eslint-disable-next-line react/prop-types
        data.map(e => (
          <div className="grid grid-cols-[35%,65%] mb-4 border-y py-4 gap-5">
            <img
              className="w-[64px] md:w-[96px] h-fit my-auto rounded-xl overflow-hidden ring ring-white"
              src={e.image}
              alt={"Foto de " + e.name}
              loading="lazy"
            />

            <div className="flex flex-col text-sm">
              <span>Nombre: {e.name}</span>
              <span>ID: {e.id}</span>
              <span>Posición: {e.position}</span>
              <span>Equipo: {e.team}</span>
              <span>Clasificación: {e.classified}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function Habilities() {
  const data = [
    {
      image: "/img/profile_default.webp",
      hability: "Ofensiva",
      level: 2.45
    },
    {
      image: "/img/profile_default.webp",
      hability: "Presión",
      level: 5.45
    },
    {
      image: "/img/profile_default.webp",
      hability: "Defensiva",
      level: 8.45
    }
  ];

  return (
    <div className="border rounded-2xl p-4 shadow-xl shadow-black/[3%]">
      <span className="text-xl font-semibold mb-2.5 block">Habilidades</span>
      {Children.toArray(
        // eslint-disable-next-line react/prop-types
        data.map(e => (
          <div className="grid grid-cols-[35%,65%] mb-4 border-y py-4 gap-5 items-center">
            <img
              className="w-[64px] h-fit my-auto rounded-xl overflow-hidden ring ring-white"
              src={e.image}
              alt="Foto de Habilidad"
              loading="lazy"
            />

            <div className="flex flex-col text-sm">
              <span>{e.hability}</span>
              <span>{e.level}%</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function FormProfile() {
  return (
    <form className="grid grid-cols-1 lg:grid-cols-2 w-full">
      <div className="flex flex-col w-full max-w-md">
        <label htmlFor="firstName">Nombre</label>
        <input
          id="firstName"
          type="text"
          className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
        />

        <label htmlFor="lastName">Apellido</label>
        <input
          id="lastName"
          type="text"
          className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
        />

        <label htmlFor="cellNumber">Celular</label>
        <input
          id="cellNumber"
          pattern="[0-9]"
          type="number"
          inputMode="numeric"
          className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
        />

        <label htmlFor="dateOfBirth">Fecha de Nacimiento</label>
        <input
          id="dateOfBirth"
          type="date"
          className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
        />

        <label htmlFor="country">Pais</label>
        <input
          id="country"
          type="text"
          className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
        />

        <label htmlFor="city">Ciudad</label>
        <input
          id="city"
          type="text"
          className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
        />
      </div>
    </form>
  );
}

function Profile() {
  const [editProfile, setEditProfile] = useState(false);

  const user = useSelector(state => state.auth.user);

  return (
    <section className="flex flex-col gap-5 max-w-screen-2xl w-full mx-auto mb-10">
      <section
        className="flex py-16 px-[5%] justify-between gap-10 flex-wrap items-center relative"
        style={{ backgroundImage: `url(${user?.cover || "https://i.imgur.com/habS0MR.jpg"})` }}
      >
        <div className="flex items-center w-fit gap-10">
          <div className="relative">
            <img
              className="w-[64px] md:w-[128px] h-full rounded-full overflow-hidden ring ring-white"
              src={user?.avatar || "/img/profile_default.webp"}
              alt={"Foto de Perfil de " + user?.firstName + " - " + user?.lastName}
              loading="lazy"
            />
            <button
              className="absolute top-5 -right-3 bg-white p-1.5 rounded-full"
              aria-label="Cambiar Foto de Perfil"
            >
              <BsFillCameraFill size="24" />
            </button>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-xl md:text-2xl">
              {user?.firstName || "John"} {user?.lastName || "Doe"}{" "}
              <small className="text-sm opacity-80">
                {user?.nickName ? "(" + user?.nickName + ")" : ""}
              </small>
            </span>
            <span className="font-semibold opacity-80">
              {user?.age ? user?.age + " Años - " : "99 Años"}{" "}
              {user?.ubication.country || "Nowhere - "} {user?.ubication.city || "Worldwide"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-5 w-fit">
          <span>Vista del perfil: Publico</span>

          <button
            className="p-1.5 bg-white rounded-full"
            onClick={() => setEditProfile(!editProfile)}
            aria-label="Editar Perfil"
          >
            <BsPencilFill size="18" />
          </button>
        </div>

        <button
          className="absolute top-5 right-5 bg-white p-1.5 rounded-full"
          aria-label="Cambiar Fondo de Perfil"
        >
          <BsFillCameraFill size="24" />
        </button>
      </section>

      <section className="flex max-lg:flex-col justify-between gap-10 mx-[5%]">
        {editProfile ? (
          <FormProfile />
        ) : (
          <>
            <section className="flex flex-col gap-10">
              <Friends />

              <Sports />

              <Platforms />

              <Social />
            </section>

            <section className="flex flex-col gap-5 max-w-xl w-full">
              <Teams />

              <Habilities />
            </section>
          </>
        )}
      </section>
    </section>
  );
}

export default Profile;
