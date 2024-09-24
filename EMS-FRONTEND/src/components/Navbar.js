import React from "react";
import logo from '../assets/logo.png';
import DrawerWithNavigation from "./DrawerWithNavigation";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center"><DrawerWithNavigation/>

        <img src={logo} height={29} width={38}></img>&nbsp;
        <p className="text-white font-bold">Employee Management System</p>
      </div>
    </div>
  );
};

export default Navbar;
