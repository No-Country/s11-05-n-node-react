/* eslint-disable react/prop-types */

const CategoriesTypes = ({ typesCategories, setTypesCategories, title }) => {
  const updateSelected = id => {
    const updatedCategories = typesCategories.map(cat =>
      cat.id === id ? { ...cat, selected: true } : { ...cat, selected: false }
    );
    setTypesCategories(updatedCategories);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <span className="max-sm:text-center my-10 text-white font-medium text-lg mx-auto">
        {title}
      </span>
      <div className="flex max-sm:flex-col justify-between h-fit max-sm:w-[60%] mx-auto gap-10 w-full">
        {typesCategories.map(cat => {
          return (
            <button
              type="button"
              key={cat.id}
              className="w-full h-full p-1 rounded-2xl aspect-square bg-gradient-to-b from-[#00ff00] to-[#ffff00] flex flex-col"
              onClick={() => updateSelected(cat.id)}
            >
              <div
                className={
                  "text-2xl md:text-xl font-bold flex flex-col justify-center items-center gap-2 h-full w-full rounded-2xl transition duration-150 hover:bg-yellow-50 hover:text-gray-800 " +
                  (cat.selected ? " bg-green-50 text-black" : " bg-gray-800 text-white")
                }
              >
                {cat.icon}
                <span>{cat.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesTypes;
