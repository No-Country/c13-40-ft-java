"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-screen relative">
      <div className="sticky h-20 w-full bg-black flex justify-between items-center p-4">
        <GiHamburgerMenu
          onClick={() => setOpen(!open)}
          className="text-2xl text-white cursor-pointer md:hidden"
        />
        <Image
          className="mx-auto"
          src="/LogoNav.png"
          width={100}
          height={100}
        />
        <div className="flex justify-center items-center">
          <AiOutlineSearch className="text-2xl text-white cursor-pointer" />
          <AiOutlineShoppingCart className="text-2xl mx-1 text-white cursor-pointer" />
          <HiOutlineUserCircle className="text-2xl text-white cursor-pointer" />
        </div>
      </div>
      <div
        className={`absolute top-0 mt-20 ${
          open ? "translate-x-[-900px]" : "translate-x-0"
        } md:hidden h-screen w-6/12 bg-black transition-all duration-700 ease`}
      >
        <div className="flex flex-col justify-center items-start p-4">
          <div className="flex flex-row my-2 cursor-pointer">
            <BiCategory className="text-2xl text-white" />
            <span className="text-white ml-2">Categories</span>
          </div>
          <div className="flex flex-row my-2 cursor-pointer">
            <FaRegHeart className="text-2xl text-white" />
            <span className="text-white ml-2">Favorites</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
