import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import CategoriesTypes from "./components/CategoriesTypes";
import CategoriesList from "./components/CategoriesList";
import { listCategories } from "../../store/state/categorySlice";
import { updateProfile } from "../../store/state/authSlice";
import { IoGameControllerOutline } from "react-icons/io5";
import { BiFootball } from "react-icons/bi";

const Onboarding = () => {
  const categoriesList = useSelector(state => state.category.listCategories);
  const categoriesListSelected = useSelector(state => state.category.listCategoriesSelected);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [typesCategories, setTypesCategories] = useState([
    {
      id: 1,
      icon: <IoGameControllerOutline size={35} />,
      name: "Online",
      selected: false
    },
    {
      id: 2,
      icon: <BiFootball size={35} />,
      name: "Deportes",
      selected: false
    },
    {
      id: 3,
      icon: (
        <div className="flex">
          <IoGameControllerOutline size={35} />
          <BiFootball size={35} />
        </div>
      ),
      name: "Ambos",
      selected: false
    }
  ]);

  const [pageActive, setPageActive] = useState(0);
  const [buttonName, setButtonName] = useState("Siguiente");

  const handleClickNext = () => {
    if (buttonName === "Guardar") return saveCategories();
    if (pageActive === 0)
      if (typesCategories[0].selected || typesCategories[2].selected) {
        if (typesCategories[0].selected) setButtonName("Guardar");
        setPageActive(1);
        return;
      }
    if (typesCategories[1].selected || typesCategories[2].selected) {
      setButtonName("Guardar");
      return setPageActive(2);
    }
    setPageActive(0);
  };

  const handleClickPrev = () => {
    setPageActive(typesCategories[2].selected ? pageActive - 1 : 0);
    setButtonName("Siguiente");
  };

  const saveCategories = async () => {
    let idsCategories = categoriesListSelected.map(cat => cat._id);
    const updateCategoryInUser = {
      category: idsCategories,
      status: true
    };
    const userUpdate = await dispatch(updateProfile(updateCategoryInUser));
    if (userUpdate.ok) {
      navigate("/home");
    }
  };

  const isButtonActive = () => {
    for (let i = 0; i < typesCategories.length; i++) {
      if (typesCategories[i].selected) return true;
    }
    return false;
  };

  useEffect(() => {
    dispatch(listCategories());
  }, []);

  return (
    <div className="px-10 pt-10 bg-black">
      <h1 className="flex w-full text-2xl font-bold text-green-400">¡Bienvenid@ a Let´s Play!</h1>
      {pageActive === 0 && (
        <CategoriesTypes
          typesCategories={typesCategories}
          setTypesCategories={setTypesCategories}
          title={"Queremos saber sobre tus gustos, tus juegos de preferencia son..."}
        />
      )}
      {pageActive === 1 && (
        <CategoriesList
          categories={categoriesList?.filter(cat => cat.type === "game")}
          title={"Selecciona tus tipos de juegos favoritos"}
        />
      )}
      {pageActive === 2 && (
        <CategoriesList
          categories={categoriesList?.filter(cat => cat.type === "sport")}
          title={"Selecciona tus deportes favoritos"}
        />
      )}
      <section className="flex flex-col items-center">
        <div className="flex gap-4">
          {pageActive > 0 && (
            <button
              className="w-[240px] h-[40px] bg-gray-300 rounded-md mt-16"
              onClick={handleClickPrev}
            >
              atras
            </button>
          )}
          <button
            className={` ${
              isButtonActive() ? "bg-green-400" : "bg-gray-300"
            } w-[240px] h-[40px]  rounded-md mt-16`}
            onClick={handleClickNext}
            disabled={isButtonActive() ? "" : "disabled"}
          >
            {buttonName}
          </button>
        </div>
        <button className="w-[240px] h-[40px] mt-1 text-blue-500" onClick={() => navigate("/home")}>
          Omitir
        </button>
      </section>
    </div>
  );
};

export default Onboarding;
