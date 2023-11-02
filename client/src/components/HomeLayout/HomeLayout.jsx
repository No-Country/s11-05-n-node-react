import SidebarHome from "../SidebarHome/SidebarHome";
import HeaderHome from "../HeaderHome/HeaderHome";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <SidebarHome />
      <HeaderHome />
      <section className="flex mt-5 lg:pl-[26%] xl:pl-[22%] 2xl:pl-[16%] p-3 pt-20 bg-[#181818]">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
