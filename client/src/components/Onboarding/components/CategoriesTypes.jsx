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
      <span className="text-base py-12">{title}</span>
      <div className="flex w-full justify-center gap-10">
        {typesCategories.map(cat => {
          return (
            <div
              key={cat.id}
              className={` ${
                cat.selected ? "bg-red-200" : "bg-white"
              } flex w-[14.0625rem] h-[14.0625rem] rounded-3xl justify-center items-center text-xl font-bold shadow-md shadow-gray-400 border cursor-pointer hover:bg-red-100`}
              onClick={() => updateSelected(cat.id)}
            >
              <p>{cat.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesTypes;
