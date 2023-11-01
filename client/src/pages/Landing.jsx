import Advantages from "../components/Landing/Advantages/Advantages";
import HeaderLanding from "../components/Landing/HeaderLanding/HeaderLanding";
import BottomLanding from "../components/Landing/BottomLanding/BottomLanding";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Landing = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="flex flex-col w-full bg-black text-white">
        <HeaderLanding />
        <Advantages />
        <BottomLanding />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
