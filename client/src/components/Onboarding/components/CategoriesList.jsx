/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addCategoryToSelect, removeCategoryFromSelect } from "../../../store/state/categorySlice";

const CategoriesList = ({ categories, title }) => {
  const categoriesListSelected = useSelector(state => state.category.listCategoriesSelected);
  const dispatch = useDispatch();
  const isSelected = cat => {
    return categoriesListSelected && categoriesListSelected.findIndex(item => item === cat) !== -1
      ? true
      : false;
  };
  const addOrRemoveCategory = category => {
    if (!isSelected(category)) {
      dispatch(addCategoryToSelect(category));
    } else {
      dispatch(removeCategoryFromSelect(category._id));
    }
  };
  return (
    <div className="flex flex-col w-[90%] items-center max-w-screen-xl mx-auto">
      <span className="my-10 text-white font-medium text-lg">{title}</span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5 h-full">
        {categories?.map(cat => {
          return (
            <button
              type="button"
              key={cat._id}
              className="w-full h-full max-h-[225px] p-1 rounded-2xl aspect-square flex flex-col bg-gradient-to-b from-[#00ff00] to-[#ffff00]"
              onClick={() => addOrRemoveCategory(cat)}
            >
              <div className="relative w-full h-full">
                <img
                  src={
                    cat?.image ||
                    "https://media.wired.com/photos/61f48f02d0e55ccbebd52d15/master/w_2560%2Cc_limit/Gear-Rant-Game-Family-Plans-1334436001.jpg"
                  }
                  alt="falta"
                  className={`w-full h-full rounded-2xl object-cover ${
                    isSelected(cat) ? "opacity-40" : null
                  }`}
                />
                <p className="absolute text-xl font-semibold text-white bottom-3 inset-x-0">
                  {cat.name}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
