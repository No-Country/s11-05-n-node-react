import RelatedSearch from "../components/HomeComponents/RelatedSearch";
import TeamBuilding from "../components/HomeComponents/TeamBuilding";

const Home = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-4 w-full">

        <div className="w-full sm:-1/2 bg-red-500">
          <RelatedSearch />
          <TeamBuilding />
        </div>

        <div className="w-full sm:w-1/2 bg-lime-600">
          aqui va el diseño de la seccion
        </div>

      </section>
    </>
  );
};

export default Home;
