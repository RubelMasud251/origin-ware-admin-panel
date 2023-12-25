import { useState } from "react";
import { FaJediOrder, FaStore, FaUser } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoMdHome, IoIosSettings } from "react-icons/io";
import { PiPencilSimpleThin } from "react-icons/pi";

import { CiDiscount1 } from "react-icons/ci";
import { SiGoogleanalytics, SiGooglemarketingplatform } from "react-icons/si";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  const isLargeDevice = window.innerWidth > 768;
  const [isMenuVisible, setMenuVisible] = useState(isLargeDevice);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const menuItems = [
    {
      path: "/home",
      name: "Home",
      icon: <IoMdHome />,
    },
    {
      path: "/orders",
      name: "Orders",
      icon: <FaJediOrder />,
      subMenu: [
        {
          path: "/drafts",
          name: "Drafts",
        },
      ],
    },
    {
      path: "/products",
      name: "Products",
      icon: <PiPencilSimpleThin />,
      subMenu: [
        {
          path: "/collections",
          name: "Collections",
        },
        {
          path: "/inventory",
          name: "Inventory",
        },
      ],
    },
    {
      path: "/customers",
      name: "Customers",
      icon: <FaUser />,
      subMenu: [
        {
          path: "/segments",
          name: "Segments",
        },
      ],
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <SiGoogleanalytics />,
    },
    {
      path: "/marketing",
      name: "Marketing",
      icon: <SiGooglemarketingplatform />,
    },
    {
      path: "/discounts",
      name: "Discounts",
      icon: <CiDiscount1 />,
    },
    {
      path: "/blog-posts",
      name: "Online Store",
      icon: <FaStore />,
      subMenu: [
        {
          path: "/blog-posts",
          name: "Blog Posts",
        },
        {
          path: "/pages",
          name: "Pages",
        },
        {
          path: "/navigation",
          name: "Navigation",
        },
      ],
    },
    {
      path: "/point-sale",
      name: "Point of Sale",
      icon: <AiFillDollarCircle />,
      subMenu: [
        {
          path: "/staff",
          name: "Staff",
        },
      ],
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <IoIosSettings />,
    },
  ];

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleSubMenuClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleNavLinkClick = () => {
    if (!isLargeDevice) {
      setMenuVisible(false);
    }
  };

  const renderMenuItem = (item, index) => (
    <div key={index}>
      <NavLink
        to={item.path}
        className="link flex items-center bg-transparent"
        onClick={() =>
          item.subMenu ? handleSubMenuClick(index) : handleNavLinkClick()
        }
      >
        <div className="text-[20px] ">{item.icon}</div>
        <div>{item.name}</div>
      </NavLink>

      {item.subMenu && (
        <div
          className={`ml-4 subMenuContainer ${
            openSubMenu === index ? "open" : ""
          }`}
        >
          {item.subMenu.map((subItem, subIndex) => (
            <NavLink
              to={subItem.path}
              key={subIndex}
              className="link flex items-center bg-transparent"
              activeClassName="active"
              onClick={handleNavLinkClick}
            >
              <div className="ml-4 font-normal">{subItem.name}</div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <div
        className={`flex ${
          isMenuVisible ? "lg:w-[100%]" : "lg:w-0"
        } translate-all duration-700`}
      >
        <div
          className={`bg-zinc-100 p-4 overflow-y-auto h-screen  lg:w-[20%] w-[70%] lg:fixed absolute top-auto left-0 ${
            isMenuVisible ? "block " : "hidden"
          }`}
        >
          {menuItems.map((item, index) => renderMenuItem(item, index))}
        </div>
        <main
          className={`lg:w-[80%] md:p-8 m-0 p-0 pt-6 min-h-screen ml-auto w-full  ${
            isMenuVisible ? "bg-black/50 lg:bg-zinc-50" : ""
          }`}
          onClick={handleNavLinkClick}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Sidebar;
