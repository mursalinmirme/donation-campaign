import { NavLink } from "react-router-dom";
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from "react";
const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <div className="absolute w-full">
    <div className="max-w-[1350px] flex items-center px-3 py-4 lg:px-0 justify-between mx-auto">
      
      <div className="">
        <img className="w-2/3" src="/Logo.png" alt="" />
      </div>
      <div className="absolute z-10 top-16 right-3 lg:right-0 lg:top-0 lg:static">
        <div className={`${menuShow ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex lg:visible flex-col bg-white text-[#0B0B0B] border lg:bg-transparent lg:border-none rounded-md w-52 lg:w-auto p-2 lg:flex-row gap-3 lg:gap-10 text-md lg:text-lg font-medium">
          <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          <li className="hover:bg-gray-200 lg:hover:bg-transparent p-2 lg:p-0">Home</li>
        </NavLink>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          <li className="hover:bg-gray-200 lg:hover:bg-transparent p-2 lg:p-0">Donation</li>
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          <li className="hover:bg-gray-200 lg:hover:bg-transparent p-2 lg:p-0">Statistics</li>
        </NavLink>
        </ul>
        </div>
      </div>
      <div className={`lg:hidden ${menuShow ? 'bg-gray-300 rounded-md' : ''} p-2`}>
        <HiMenuAlt1 onClick={() => setMenuShow(!menuShow)} className="text-2xl"></HiMenuAlt1>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
