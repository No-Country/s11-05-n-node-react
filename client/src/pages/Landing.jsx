import Advantages from "../components/Landing/Advantages/Advantages";
import HeaderLanding from "../components/Landing/HeaderLanding/HeaderLanding";
import BottomLanding from "../components/Landing/BottomLanding/BottomLanding";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <main className="pt-14 pb-4 flex flex-col w-full">
        <HeaderLanding />
        <Advantages />
        <BottomLanding />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
