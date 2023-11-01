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
    <div className="flex flex-col w-full items-center p-5 ">
      <span className="text-base py-12 text-white">{title}</span>
      <div className="flex w-full justify-center gap-10 flex-wrap">
        {categories?.map(cat => {
          return (
            <div
              key={cat._id}
              className={`bg-white flex relative w-[14.0625rem] h-[14.0625rem] rounded-3xl justify-center shadow-md shadow-green-400  cursor-pointer`}
              onClick={() => addOrRemoveCategory(cat)}
            >
              <img
                src={
                  cat.image ||
                  "https://media.wired.com/photos/61f48f02d0e55ccbebd52d15/master/w_2560%2Cc_limit/Gear-Rant-Game-Family-Plans-1334436001.jpg"
                }
                alt="falta"
                className={`w-full h-full rounded-3xl object-cover ${
                  isSelected(cat) ? "opacity-40" : null
                }`}
              />
              <p className="absolute text-xl font-semibold text-white bottom-3">{cat.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
