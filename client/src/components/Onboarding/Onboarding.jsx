import { useState } from "react";
import { useNavigate } from "react-router";
import CategoriesTypes from "./components/CategoriesTypes";
import CategoriesList from "./components/CategoriesList";

const Onboarding = () => {
  const navigate = useNavigate();
  const [typesCategories, setTypesCategories] = useState([
    {
      id: 1,
      icon: "",
      name: "Online",
      selected: false
    },
    {
      id: 2,
      icon: "",
      name: "Deportes",
      selected: false
    },
    {
      id: 3,
      icon: "",
      name: "Ambos",
      selected: false
    }
  ]);
  const [categories, setCategories] = useState({
    game: [
      {
        id: 12,
        img: "https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2018/02/android-accion.jpg",
        name: "Acción",
        selected: false
      },
      {
        id: 22,
        img: "https://i0.wp.com/www.solojugadores.com/wp-content/uploads/2023/02/DayZ-juego-de-superviencia-online.webp?resize=1024%2C573&ssl=1",
        name: "Supervivencia",
        selected: false
      },
      {
        id: 32,
        img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/11/mejores-juegos-terror-2022-2872705.jpg?tf=3840x",
        name: "Terror",
        selected: false
      },
      {
        id: 42,
        img: "https://www1.minijuegosgratis.com/v3/games/thumbnails/244317_7_sq.jpg",
        name: "Puzzle",
        selected: false
      },
      {
        id: 62,
        img: "https://sm.ign.com/t/ign_es/screenshot/default/wp4519264_56pw.1280.jpg",
        name: "Deportes",
        selected: false
      },
      {
        id: 72,
        img: "https://blog.latam.playstation.com/tachyon/sites/3/2023/05/4e35d40a3010eed12269780cc5cf65557d184012.jpg?resize=1088%2C612&crop_strategy=smart",
        name: "Peleas",
        selected: false
      },
      {
        id: 82,
        img: "https://media.tycsports.com/files/2022/05/23/432018/los-mejores-juegos-de-carreras-con-descuentos-increibles-en-steam_1440x810_wmk.webp",
        name: "Carreras",
        selected: false
      }
    ],
    sport: [
      {
        id: 13,
        img: "https://s3.abcstatics.com/media/bienestar/2019/09/17/futbol-1-kU3C--1248x698@abc.jpg",
        name: "Futbol",
        selected: false
      },
      {
        id: 33,
        img: "https://media.tycsports.com/files/2022/09/30/486024/voley_862x485.webp?v=1",
        name: "Vóley",
        selected: false
      },
      {
        id: 43,
        img: "https://media.a24.com/p/f2f0f853632807bd0169c8b551f15e90/adjuntos/296/imagenes/008/193/0008193262/la-historia-del-basquetbol.jpeg",
        name: "Básquet",
        selected: false
      },
      {
        id: 53,
        img: "https://cdn.pixabay.com/photo/2021/06/09/05/31/padel-6322450_1280.jpg",
        name: "Pádel",
        selected: false
      },
      {
        id: 63,
        img: "https://s1.abcstatics.com/media/bienestar/2019/08/02/tenis-abecedario-kgNF--620x349@abc.jpg",
        name: "Tennis",
        selected: false
      },
      {
        id: 73,
        img: "https://www.clarin.com/img/2019/12/04/xrLeAeXU_360x240__1.jpg",
        name: "Handball",
        selected: false
      },
      {
        id: 23,
        img: "https://www.lavanguardia.com/andro4all/hero/2021/03/apps-para-hacer-crossfit.jpg?width=1200&aspect_ratio=16:9",
        name: "Crossfit",
        selected: false
      }
    ]
  });
  const [pageActive, setPageActive] = useState(0);
  const [buttonName, setButtonName] = useState("Siguiente");
  const handleClickNext = () => {
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
  return (
    <div className="px-10 pt-10 bg-gray-100">
      <h1 className="flex w-full text-2xl font-bold">¡Bienvenid@ a Let´s Play!</h1>
      {pageActive === 0 && (
        <CategoriesTypes
          typesCategories={typesCategories}
          setTypesCategories={setTypesCategories}
          title={"Queremos saber sobre tus gustos, tus juegos de preferencia son..."}
        />
      )}
      {pageActive === 1 && (
        <CategoriesList
          categories={categories.game}
          setCategories={setCategories}
          title={"Selecciona tus tipos de juegos favoritos"}
        />
      )}
      {pageActive === 2 && (
        <CategoriesList
          categories={categories.sport}
          setCategories={setCategories}
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
            className="w-[240px] h-[40px] bg-gray-300 rounded-md mt-16"
            onClick={handleClickNext}
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
