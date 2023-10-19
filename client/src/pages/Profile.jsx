import { useState } from "react";
import { BsFillCameraFill, BsPencilFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import Platforms from "../components/profile/Platforms";
import Social from "../components/profile/Social";
import Teams from "../components/profile/Teams";
import Habilities from "../components/profile/Habilities";
import Sports from "../components/profile/Sports";
import Friends from "../components/profile/Friends";

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
