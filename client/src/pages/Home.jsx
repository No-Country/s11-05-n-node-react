import RelatedSearch from "../components/HomeComponents/RelatedSearch";
import TeamBuilding from "../components/HomeComponents/TeamBuilding";

const Home = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="w-full p-4">
          <RelatedSearch />
          <TeamBuilding />
        </div>

        <div className="w-full p-4">
          <h3 className="font-bold">aqui va el otro diseño de la seccion</h3>
        </div>
      </section>
    </>
  );
};

export default Home;
