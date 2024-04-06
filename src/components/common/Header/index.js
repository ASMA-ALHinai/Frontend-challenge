import React from 'react';
import { FaSearch  } from 'react-icons/fa';
import { CiMenuBurger , CiBellOn  , CiGlobe , CiUser} from "react-icons/ci";
const Header = ({ isSidebarOpen, setIsSidebarOpen }) =>  {
  return (
    <header className="bg-white shadow-sm px-4 py-2 flex items-center justify-between">

      <div className="flex items-center">
        <CiMenuBurger onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl text-gray-700 mr-4 md:hidden" />
      
        <div className="flex items-center border border-gray-200 rounded-lg px-2 py-1">
          <FaSearch className="text-gray-200" />
          <input
            type="search"
            placeholder="Search..."
            className="ml-2 outline-none text-sm"
          />
        </div>
      </div>
      
 
      <div className="flex items-center">
        <CiBellOn className="text-2xl text-gray-400 md:mx-4 mx-2" />
        <CiGlobe className="text-2xl text-gray-400 md:mx-4 mx-2" />
        <div className="flex items-center mx-4 md:visible hidden ">
          <CiUser className="text-2xl text-gray-400 font-light " />
          <div className="ml-2">
            <div className="text-sm font-semibold">Anna Adame</div>
            <div className="text-xs text-gray-400">Founder</div>
          </div>
        </div>
      </div>

      
    </header>
  );
};

export default Header;

