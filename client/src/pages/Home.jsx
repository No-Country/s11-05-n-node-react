// import { useState } from "react";
// import { Link } from "react-router-dom";
import SidebarHome from "../components/SidebarHome/SidebarHome";

import HeaderHome from "../components/HeaderHome/HeaderHome";
// import {
//   RiMapPinUserFill,
//   RiEqualizerFill,
//   RiTeamFill,
//   RiTrophyFill,
//   RiLogoutBoxRLine,
//   RiUserFill,
//   RiCheckboxBlankCircleFill,
//   RiArrowUpSLine,
//   RiMenu3Fill,
//   RiCloseLine,
//   RiNotification3Line,
// } from "react-icons/ri";



const Home = () => {


  return (
    <>
      <div className="">
        <SidebarHome />
        <section className="lg:pl-[25%] xl:pl-[2%] 2xl:pl-[13%]">
          <HeaderHome />
        </section>
        <section className="flex bg-slate-300 mt-5 lg:pl-[28%] xl:pl-[24%] 2xl:pl-[16%] h-screen p-3 pt-20">
          <h1>Bienvenido a Let’s play aqui va el contenido del home</h1>
        </section>
      </div>

    </>
  );
};

export default Home;
