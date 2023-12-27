import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

function Header({ toggleMenu }) {
  return (
    <div className="w-full bg-black p-4 text-white sticky top-0 z-10">
      <div className="grid grid-cols-3  justify-between items-center">
        <div className="lg:hidden block">
          <FaBars onClick={toggleMenu} size={24} />
        </div>
        {/* logo */}
        <div className="ml-4">
          <Link to="/">
            <img
              className="h-full w-20"
              src="/public/Origin_Workwear_Logo (2).png"
              alt=""
            />
          </Link>
        </div>
        <div className="w-auto">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="bg-[#262626] px-4 py-[3px] outline-none border border-gray-500 rounded-md hover:border-gray-100  w-full"
          />
        </div>
        <div className="flex items-center gap-2 justify-end">
          <button className="bg-[#262626] hover:bg-[#44403c] rounded-md p-2">
            <IoIosNotificationsOutline size={20} />
          </button>
          <button className="bg-[#44403c] text-xs px-0 rounded-md p-2">
            <span className="bg-[#25e82b] rounded-md  p-2">MS</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
