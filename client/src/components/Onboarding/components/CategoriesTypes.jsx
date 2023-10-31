/* eslint-disable react/prop-types */

const CategoriesTypes = ({ typesCategories, setTypesCategories, title }) => {
  const updateSelected = id => {
    const updatedCategories = typesCategories.map(cat =>
      cat.id === id ? { ...cat, selected: true } : { ...cat, selected: false }
    );
    setTypesCategories(updatedCategories);
  };

  return (
    <div className="flex flex-col w-full items-center p-5 ">
      <span className="text-base py-12 text-white">{title}</span>
      <div className="flex w-full justify-center gap-10">
        {typesCategories.map(cat => {
          return (
            <div
              key={cat.id}
              className={` ${
                cat.selected ? "bg-green-50 text-black" : "bg-gray-800 text-white"
              } flex flex-col gap-2 w-[14.0625rem] h-[14.0625rem] justify-center items-center text-xl font-bold cursor-pointer hover:bg-yellow-50 hover:text-gray-800  border-gradient`}
              onClick={() => updateSelected(cat.id)}
            >
              {cat.icon}
              <p>{cat.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesTypes;
