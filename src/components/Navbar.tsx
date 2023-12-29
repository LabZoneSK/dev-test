import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#2C2C2C] py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <Link to="/">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <span className="font-thin text-xl  text-white">Flick app</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
