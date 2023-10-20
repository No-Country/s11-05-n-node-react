import SidebarHome from "../components/SidebarHome/SidebarHome";

import HeaderHome from "../components/HeaderHome/HeaderHome";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="">
        <SidebarHome />
        <section className="lg:pl-[25%] xl:pl-[2%] 2xl:pl-[13%]">
          <HeaderHome />
        </section>
        <section className="flex bg-slate-300 mt-5 lg:pl-[28%] xl:pl-[24%] 2xl:pl-[16%] p-3 pt-20">

          <Outlet />
        </section>
      </div>
    </>
  );
};

export default Home;
