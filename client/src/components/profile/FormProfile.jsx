/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteProfile, updateProfile } from "../../store/state/authSlice";
import { CalculateAge, SortErrors } from "../../utils/utils";
import countries from "../../assets/countries.json";
import { Children, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function FormProfile({ user }) {
  const [deleting, setDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
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

    if (res?.ok) {
      toast.success("Cambios Guardados 🥳");
    } else {
      toast.error("Hubo un error al guardar.");
    }

    if (res?.errors) {
      setErrors(SortErrors(res.errors));
    }
    setUploading(false);
  };

  const removeAccount = async () => {
    setDeleting(true);
    const res = await dispatch(deleteProfile(user._id));
    if (res === 200) {
      location.reload();
    } else {
      toast.error("Hubo un error al eliminar la cuenta.");
    }
    setDeleting(false);
  };

  return (
    <>
      <Toaster />
      <section className="flex flex-col w-full">
        <span className="block mb-4 font-semibold text-2xl">Editar Perfil</span>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 w-full gap-2 lg:gap-32"
        >
          <div className="flex flex-col w-full">
            <label htmlFor="firstName">Nombre</label>
            <input
              onChange={e =>
                e.target.value.length > 1 ? setErrors({ ...errors, firstName: null }) : null
              }
              defaultValue={user?.firstName || ""}
              name="firstName"
              id="firstName"
              type="text"
              className={
                "border py-1 px-2 rounded-md focus-within:outline-1 mb-2 bg-white/10" +
                (errors?.firstName
                  ? " outline-red-500 border-red-500"
                  : " outline-indigo-500 border-[#B5FF16]")
              }
            />
            {errors?.firstName ? (
              <span className="bg-red-100 text-red-500 py-1 px-2 rounded-md w-fit mb-2">
                {errors.firstName}
              </span>
            ) : null}

            <label htmlFor="lastName">Apellido</label>
            <input
              onChange={e =>
                e.target.value.length > 1 ? setErrors({ ...errors, lastName: null }) : null
              }
              defaultValue={user?.lastName || ""}
              name="lastName"
              id="lastName"
              type="text"
              className={
                "border py-1 px-2 rounded-md focus-within:outline-1 mb-2 bg-white/10" +
                (errors?.lastName
                  ? " outline-red-500 border-red-500"
                  : " outline-indigo-500 border-[#B5FF16]")
              }
            />
            {errors?.lastName ? (
              <span className="bg-red-100 text-red-500 py-1 px-2 rounded-md w-fit mb-2">
                {errors.lastName}
              </span>
            ) : null}

            <label htmlFor="email">Email</label>
            <input
              onChange={e =>
                e.target.value.length > 1 ? setErrors({ ...errors, email: null }) : null
              }
              defaultValue={user?.email || ""}
              name="email"
              id="email"
              type="email"
              className={
                "border py-1 px-2 rounded-md focus-within:outline-1 mb-2 bg-white/10" +
                (errors?.email
                  ? " outline-red-500 border-red-500"
                  : " outline-indigo-500 border-[#B5FF16]")
              }
            />
            {errors?.email ? (
              <span className="bg-red-100 text-red-500 py-1 px-2 rounded-md w-fit mb-2">
                {errors.email}
              </span>
            ) : null}

            <label htmlFor="cellNumber">Celular</label>
            <input
              onChange={e =>
                e.target.value.length > 1 ? setErrors({ ...errors, cellNumber: null }) : null
              }
              defaultValue={user?.cellNumber || 0}
              name="cellNumber"
              id="cellNumber"
              type="tel"
              inputMode="numeric"
              className={
                "border py-1 px-2 rounded-md focus-within:outline-1 mb-2 bg-white/10" +
                (errors?.cellNumber
                  ? " outline-red-500 border-red-500"
                  : " outline-indigo-500 border-[#B5FF16]")
              }
            />
            {errors?.cellNumber ? (
              <span className="bg-red-100 text-red-500 py-1 px-2 rounded-md w-fit mb-2">
                {errors.cellNumber}
              </span>
            ) : null}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="dateOfBirth">Fecha de Nacimiento</label>
            <input
              onChange={e =>
                e.target.value.length > 1 ? setErrors({ ...errors, dateOfBirth: null }) : null
              }
              defaultValue={user?.dateOfBirth?.split("T")[0] || ""}
              name="dateOfBirth"
              id="dateOfBirth"
              type="date"
              className={
                "border py-1 px-2 rounded-md focus-within:outline-1 mb-2 bg-white/10" +
                (errors?.dateOfBirth
                  ? " outline-red-500 border-red-500"
                  : " outline-indigo-500 border-[#B5FF16]")
              }
            />
            {errors?.dateOfBirth ? (
              <span className="bg-red-100 text-red-500 py-1 px-2 rounded-md w-fit mb-2">
                {errors.dateOfBirth}
              </span>
            ) : null}

            <label htmlFor="country">Pais</label>
            <select
              onChange={e =>
                e.target.value.length > 1
                  ? setErrors({ ...errors, ["ubication.country"]: null })
                  : null
              }
              className={
                "border py-1 px-2 rounded-md focus-within:outline-1 mb-2 bg-white/10" +
                (errors?.ubication?.country
                  ? " outline-red-500 border-red-500"
                  : " outline-indigo-500 border-[#B5FF16]")
              }
              name="country"
              id="country"
              defaultValue={user?.ubication?.country || countries[0].name}
            >
              {Children.toArray(countries.map(e => <option value={e.name}>{e.name}</option>))}
            </select>
            {errors?.["ubication.country"] ? (
              <span className="bg-red-100 text-red-500 py-1 px-2 rounded-md w-fit mb-2">
                {errors?.["ubication.country"]}
              </span>
            ) : null}

            <label htmlFor="city">Ciudad</label>
            <input
              onChange={e =>
                e.target.value.length > 1
                  ? setErrors({ ...errors, ["ubication.city"]: null })
                  : null
              }
              defaultValue={user?.ubication?.city || ""}
              name="city"
              id="city"
              type="text"
              className={
                "border py-1 px-2 rounded-md focus-within:outline-1 mb-2 bg-white/10" +
                (errors?.ubication?.city
                  ? " outline-red-500 border-red-500"
                  : " outline-indigo-500 border-[#B5FF16]")
              }
            />
            {errors?.["ubication.city"] ? (
              <span className="bg-red-100 text-red-500 py-1 px-2 rounded-md w-fit mb-2">
                {errors?.["ubication.city"]}
              </span>
            ) : null}

            <section className="flex items-center justify-between gap-4 max-sm:mt-5 max-sm:flex-col w-full">
              <button
                onClick={() => setIsOpen(true)}
                className="py-1.5 px-3 bg-red-100 text-red-500 font-medium rounded-md sm:mt-5 w-full sm:w-fit"
                type="button"
              >
                Eliminar Cuenta
              </button>

              <button
                className={
                  "py-1.5 px-3 bg-gradient-to-b from-[#B5FF16] to-green-300 text-black font-medium rounded-md sm:mt-5 w-full sm:w-fit" +
                  (uploading ? " animate-pulse" : "")
                }
                type="submit"
                disabled={uploading}
              >
                {uploading ? "Guardando..." : "Guardar"}
              </button>
            </section>
          </div>
        </form>
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <div className="min-h-screen text-center bg-black/60">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-[70%] sm:max-w-xs p-6 overflow-hidden text-center align-middle transition-all transform bg-slate-800 text-white  shadow-xl rounded-2xl">
                <span className="font-medium">¿Estas seguro que queres borrar tu cuenta?</span>
                <div className="flex items-center gap-2 mt-5 w-fit mx-auto">
                  <button
                    disabled={deleting}
                    className={
                      "py-1.5 px-3 bg-red-100 text-red-500 rounded-md" +
                      (deleting ? " animate-pulse" : "")
                    }
                    onClick={() => removeAccount()}
                    type="button"
                  >
                    {deleting ? "Eliminando..." : "Si, Eliminar"}
                  </button>
                  <button
                    className="py-1.5 px-3 bg-green-300 text-green-700 rounded-md"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    type="button"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
