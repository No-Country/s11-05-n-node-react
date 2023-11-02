import SidebarHome from "../SidebarHome/SidebarHome";

import HeaderHome from "../HeaderHome/HeaderHome";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div>
        <SidebarHome />
        <section className="lg:pl-[25%] xl:pl-[2%] 2xl:pl-[13%]">
          <HeaderHome />
        </section>
        <section className="flex mt-5 lg:pl-[26%] xl:pl-[22%] 2xl:pl-[16%] p-3 pt-20">
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default HomeLayout;
