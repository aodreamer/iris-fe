import { React, useState } from "react";
import { FaUser, FaChevronDown, FaInfoCircle, FaUserCircle, FaFileAlt, FaMoon, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <header className="bg-[#5ce1e6] text-white p-4 shadow-md">
      <div className="container flex justify-between items-center max-w-full w-full">
        <div className="flex items-center">
          <img src="/images/iris.png" alt="IRIS Icon" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">
            <span className="text-black">IRIS</span> <span className="text-[#007ee2]">1.0</span> | Dashboard
          </h1>
        </div>
        <nav className="relative">
          <button className="flex items-center space-x-2 font-bold text-xl" onClick={toggleDropdown}>
            <FaUser className="mr-1" />
            <span>User1</span>
            <FaChevronDown className="hover:text-cyan-500 " />
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10">
              <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <FaInfoCircle className="mr-2" />
                About
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <FaUserCircle className="mr-2" />
                Profile
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <FaFileAlt className="mr-2" />
                Report
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <FaMoon className="mr-2" />
                Dark Theme
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer border-t border-gray-300">
                <FaSignOutAlt className="mr-2" />
                Logout
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
