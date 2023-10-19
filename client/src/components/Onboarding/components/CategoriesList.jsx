/* eslint-disable react/prop-types */

const CategoriesGames = ({ categories, setCategories, title }) => {
  const updateSelected = id => {
    const updatedCategories = categories.map(cat =>
      cat.id === id ? { ...cat, selected: true } : { ...cat, selected: false }
    );
    setCategories(updatedCategories);
  };
  return (
    <div className="flex flex-col w-full items-center p-5 ">
      <span className="text-base py-12">{title}</span>
      <div className="flex w-full justify-center gap-10 flex-wrap">
        {categories.map(cat => {
          return (
            <div
              key={cat.id}
              className={` ${
                cat.selected ? "bg-red-300" : "bg-white"
              } flex relative w-[14.0625rem] h-[14.0625rem] rounded-3xl justify-center shadow-md shadow-gray-400  cursor-pointer`}
              onClick={() => updateSelected(cat.id)}
            >
              <img src={cat.img} alt="" className="w-full h-full rounded-3xl object-cover" />
              <p className="absolute text-xl font-semibold text-white bottom-3">{cat.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesGames;
