"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-screen relative">
      <div className="sticky h-20 w-full bg-blue-400 flex justify-between items-center p-2">
        <GiHamburgerMenu
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer md:hidden"
        />
        <input className="h-6 w-32 rounded-full" type="text" />
        <div className="flex justify-center items-center"></div>
      </div>
      <div
        className={`absolute top-0 mt-20 ${
          open ? "translate-x-[-900px]" : "translate-x-0"
        } h-40 w-full bg-green-700 transition-all duration-500 ease`}
      ></div>
    </div>
  );
};

export default Navbar;
