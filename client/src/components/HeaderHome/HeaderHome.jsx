import { RiCheckboxBlankCircleFill, RiNotification3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <>
      <header className="p-2 flex justify-end h-20 border-b border-gray-300 bg-[rgb(17,19,24)] fixed top-0 left-0 w-full">
        <ul className="w-48 flex items-center justify-around gap-4 mr-4">
          <li>
            <Link className="relative text-[#cec6bf] hover:text-white transition-colors text-2xl">
              <RiNotification3Line />
              <RiCheckboxBlankCircleFill className=" text-orange-600 text-[8px] absolute top-0 right-0" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center text-[#e6e1dd] gap-4">
              <img
                src="https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg?w=99&t=st=1697435327~exp=1697435927~hmac=499506810bf3f5b33da3c3578bf10bf31a748d140d51d983368abfadc5b85ec8"
                className="w-[55px] h-[55px] rounded-full object-cover ring-2 ring-gray-300"
                alt="avatar"
              />
              maya
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default HeaderHome;
