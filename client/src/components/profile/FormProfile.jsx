/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../store/state/authSlice";
import { CalculateAge } from "../../utils/utils";
import countries from "../../assets/countries.json";
import { Children, useState } from "react";

export default function FormProfile({ user }) {
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();
    setUploading(true);

    const data = {
      age: e.target.dateOfBirth.value ? CalculateAge(e.target.dateOfBirth.value) : 0,
      firstName: e.target.firstName.value || user.firstName,
      lastName: e.target.lastName.value || user.lastName,
      email: e.target.email.value || user.email,
      cellNumber: e.target.cellNumber.value || user.cellNumber,
      dateOfBirth: e.target.dateOfBirth.value || user.dateOfBirth,
      ubication: {
        country: e.target.country.value || user.ubication.country,
        city: e.target.city.value || user.ubication.city
      }
    };

    const res = await dispatch(updateProfile(data));
    if (res) {
      toast.success("Cambios Guardados 🥳");
    } else {
      toast.error("Hubo un error al guardar.");
    }
    setUploading(false);
  };
  return (
    <>
      <Toaster />
      <section className="flex flex-col w-full">
        <span className="block mb-4 font-medium text-2xl">Editar Perfil</span>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 w-full gap-2 lg:gap-32"
        >
          <div className="flex flex-col w-full">
            <label htmlFor="firstName">Nombre</label>
            <input
              defaultValue={user?.firstName || ""}
              name="firstName"
              id="firstName"
              type="text"
              className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
            />

            <label htmlFor="lastName">Apellido</label>
            <input
              defaultValue={user?.lastName || ""}
              name="lastName"
              id="lastName"
              type="text"
              className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
            />

            <label htmlFor="email">Email</label>
            <input
              defaultValue={user?.email || ""}
              name="email"
              id="email"
              type="email"
              className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
            />

            <label htmlFor="cellNumber">Celular</label>
            <input
              defaultValue={user?.cellNumber || 0}
              name="cellNumber"
              id="cellNumber"
              type="tel"
              inputMode="numeric"
              className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="dateOfBirth">Fecha de Nacimiento</label>
            <input
              defaultValue={user?.dateOfBirth?.split("T")[0] || ""}
              name="dateOfBirth"
              id="dateOfBirth"
              type="date"
              className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
            />

            <label htmlFor="country">Pais</label>
            <select
              className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
              name="country"
              id="country"
              defaultValue={user?.ubication?.country || countries[0].name}
            >
              {Children.toArray(countries.map(e => <option value={e.name}>{e.name}</option>))}
            </select>

            <label htmlFor="city">Ciudad</label>
            <input
              defaultValue={user?.ubication?.city || ""}
              name="city"
              id="city"
              type="text"
              className="border py-1 px-2 rounded-md focus-within:outline-1 outline-indigo-500 mb-2"
            />
            <button
              className={
                "py-1.5 px-3 bg-black text-white font-medium rounded-md mt-5 lg:w-fit" +
                (uploading ? " animate-pulse" : "")
              }
              type="submit"
              disabled={uploading}
            >
              {uploading ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
