import { Fragment, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Platforms from "../components/profile/Platforms";
import Social from "../components/profile/Social";
import Teams from "../components/profile/Teams";
import Habilities from "../components/profile/Habilities";
import Sports from "../components/profile/Sports";
import Friends from "../components/profile/Friends";
import FormProfile from "../components/profile/FormProfile";
import { Dialog, Transition } from "@headlessui/react";
import { uploadPicture } from "../store/state/authSlice";
import toast, { Toaster } from "react-hot-toast";

function Profile() {
  const [uploading, setUploading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);

  const changeAvatar = e => {
    setAvatar(e.target.files[0]);
    setIsOpen(true);
  };

  const cancelUpload = () => {
    setAvatar(null);
    document.querySelector("#avatar").value = null;
  };

  const uploadAvatar = async () => {
    setUploading(true);
    const res = await dispatch(uploadPicture(avatar, user._id));

    if (res) {
      toast.success("Foto Guardada 🥳");
      cancelUpload();
      setIsOpen(false);
    } else {
      toast.error("Hubo un error al guardar.");
    }
    setUploading(false);
  };

  return (
    <>
      <Toaster />
      <section className="flex flex-col gap-5 max-w-screen-2xl w-full mx-auto mb-10 pb-5 rounded-lg bg-white">
        <section
          className="flex py-16 px-[5%] justify-between gap-10 flex-wrap items-center relative"
          style={{ backgroundImage: `url(${user?.cover || "https://i.imgur.com/habS0MR.jpg"})` }}
        >
          <div className="flex items-center w-fit gap-10">
            <div className="relative">
              <img
                className="bg-black aspect-square h-full w-[128px] object-cover rounded-full overflow-hidden ring ring-white"
                src={user?.avatar || "/img/profile_default.webp"}
                alt={"Foto de Perfil de " + user?.firstName + " - " + user?.lastName}
                loading="lazy"
              />
              <label
                htmlFor="avatar"
                className="absolute top-5 -right-3 bg-white p-1.5 rounded-full cursor-pointer"
                aria-label="Cambiar Foto de Perfil"
              >
                <BsFillCameraFill className="w-4 h-4 md:w-6 md:h-6" />
              </label>
              <input
                className="hidden"
                id="avatar"
                type="file"
                name="avatar"
                onChange={e => changeAvatar(e)}
              />
            </div>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={() => {
                  setIsOpen(false), cancelUpload();
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
                    <div className="inline-block w-full max-w-[90%] sm:max-w-xs p-6 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <small className="font-medium">Cambiar foto de perfil</small>
                      {avatar ? (
                        <img
                          className="bg-black mx-auto aspect-square w-[128px] h-full object-cover rounded-full mt-5"
                          src={URL.createObjectURL(avatar)}
                          alt="Uploaded Page"
                          loading="lazy"
                        />
                      ) : null}
                      <div className="flex items-center gap-2 mt-5 w-fit mx-auto">
                        <button
                          disabled={uploading}
                          className={
                            "py-1.5 px-3 bg-green-400 text-green-800 rounded-md" +
                            (uploading ? " animate-pulse" : "")
                          }
                          onClick={() => uploadAvatar()}
                          type="button"
                        >
                          {uploading ? "Subiendo..." : "Guardar"}
                        </button>
                        <button
                          className="py-1.5 px-3 bg-red-400 text-red-800 rounded-md"
                          onClick={() => {
                            setIsOpen(false), cancelUpload();
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

            <div className="flex flex-col">
              <span className="font-semibold text-xl md:text-2xl">
                {user?.firstName || "John"} {user?.lastName || "Doe"}{" "}
                <small className="text-sm opacity-80">
                  {user?.nickName ? "(" + user?.nickName + ")" : ""}
                </small>
              </span>
              <span className="font-semibold opacity-80">
                {user?.age ? user?.age + " Años - " : "21 Años"}{" "}
                {user?.ubication?.country || "Nowhere"} - {user?.ubication?.city || "Worldwide"}
              </span>
            </div>
          </div>

          <button
            className="py-1.5 px-3.5 bg-white rounded-2xl ring-2 ring-white font-medium pressable"
            onClick={() => setEditProfile(!editProfile)}
            aria-label={editProfile ? "Volver a Perfil" : "Editar Perfil"}
          >
            {editProfile ? "Volver a Perfil" : "Editar Perfil"}
          </button>
        </section>

        <section className="flex max-lg:flex-col justify-between gap-10 mx-[5%]">
          {editProfile ? (
            <FormProfile user={user} />
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
    </>
  );
}

export default Profile;
