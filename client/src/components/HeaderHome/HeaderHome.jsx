import { RiCheckboxBlankCircleFill, RiNotification3Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  const user = useSelector(state => state.auth.user);
  return (
    <>
      <header className="p-2 flex justify-end h-20 border-b border-gray-300 bg-[rgb(17,19,24)] fixed top-0 left-0 w-full z-[49]">
        <ul className="w-48 flex items-center justify-around gap-4 mr-4">
          <li>
            <Link className="relative text-[#cec6bf] hover:text-white transition-colors text-2xl">
              <RiNotification3Line />
              <RiCheckboxBlankCircleFill className=" text-orange-600 text-[8px] absolute top-0 right-0" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center text-[#e6e1dd] gap-4">
              {user?.firstName || user?.nickName}
              <img
                src={user?.avatar || "/img/profile_default.webp"}
                className="w-[55px] h-[55px] rounded-full object-cover ring-2 ring-gray-300"
                alt="avatar"
              />
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default HeaderHome;
