const RelatedSearch = () => {
  return (
    <div className="w-full max-w-xs my-4">
      <form className="bg-[#242424] text-white shadow-md rounded-full">
        <div className="mb-4">
          <input
            className=" bg-[#242424] shadow-lg appearance-none border border-[#202] rounded-full w-full py-2 px-3 text-white leading-tight  "
            id="buscarjuego"
            type="text"
            placeholder="A que juegas hoy"
          />
        </div>
      </form>
    </div>
  );
};

export default RelatedSearch;
