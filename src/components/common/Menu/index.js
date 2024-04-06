

import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import { CiGrid41, CiServer, CiReceipt  , CiCircleChevUp , CiCircleChevDown , CiCircleMinus} from "react-icons/ci";


const SidebarItem = ({ icon, label, children , to }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
       <Link to={to}>
      <button className="flex items-center justify-between w-full text-gray-700 hover:bg-gray-100 px-4 py-2" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center">
          <span className="mr-3">{icon}</span>
          <span>{label}</span>
        </div>
        {children && (isOpen ? <CiCircleChevUp className="w-5 h-5" /> : <CiCircleChevDown className="w-5 h-5" />)}
      </button>
      {isOpen && children}
      </Link>
    </div>
  );
};

const Menu = () => {
  return (
    <aside className="bg-white  h-full">
      <div className="px-4 py-6">
      

        <SidebarItem icon={<CiGrid41 />} label="Dashboards" to="/" />
      <SidebarItem icon={<CiServer />} label="Projects" >
      <div className="flex items-center  w-full text-gray-700 hover:bg-gray-100 px-4 py-2" >
        <SidebarItem icon={<CiCircleMinus />} label="Athar" to="/projects">
        </SidebarItem>
        </div>
    
      </SidebarItem>
      <SidebarItem icon={<CiReceipt />} label="Reports" to="/reports" />
      </div>
    </aside>
  );
};

export default Menu;
