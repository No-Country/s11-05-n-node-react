import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  const user = useSelector(state => state.auth.user);
  return (
    <>
      <header className="py-4 flex justify-end bg-black/50 backdrop-blur-md fixed top-0 left-0 w-[100%] mx-auto pr-10 z-[49]">
        <Link
          to="/profile"
          className="flex items-center text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white text-xl font-medium gap-5 capitalize"
        >
          Hola {user?.firstName || user?.nickName}
          <img
            src={user?.avatar || "/img/profile_default.webp"}
            className="w-[55px] h-[55px] rounded-full object-cover ring-2 ring-[#B5FF16]"
            alt="avatar"
          />
        </Link>
      </header>
    </>
  );
};

export default HeaderHome;
