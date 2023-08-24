"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiSolidCategory } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative">
      <div className="sticky h-20 w-full bg-primary flex justify-between items-center p-4">
        <Image
          className="hidden md:block"
          src="/LogoNav.png"
          width={100}
          height={100}
        />
        <GiHamburgerMenu
          onClick={() => setOpen(!open)}
          className="text-2xl text-black cursor-pointer md:hidden"
        />
        <div className="hidden md:block flex justify-center items center text-black font-bold">
          <span className="cursor-pointer mx-2 hover:opacity-60">Home</span>
          <span className="cursor-pointer mx-2 hover:opacity-60">Products</span>
          <span className="cursor-pointer mx-2 hover:opacity-60">
            Categories
          </span>
          <span className="cursor-pointer mx-2 hover:opacity-60">About</span>
          <span className="cursor-pointer mx-2 hover:opacity-60">Contact</span>
        </div>
        <Image
          className="mx-auto md:hidden"
          src="/LogoNav.png"
          width={100}
          height={100}
        />
        <div className="flex justify-center items-center">
          <ImSearch className="text-xl text-black cursor-pointer" />
          <MdShoppingCart className="text-2xl mx-1 text-black cursor-pointer" />
          <HiOutlineUserCircle className="text-2xl text-black cursor-pointer" />
        </div>
      </div>
      <div
        className={`absolute top-0 mt-20 ${
          open ? "translate-x-[-900px]" : "translate-x-0"
        } md:hidden h-screen w-6/12 z-10 bg-primary transition-all duration-700 ease`}
      >
        <div className="flex flex-col justify-center items-start p-4">
          <div className="flex flex-row my-2 cursor-pointer">
            <BiSolidCategory className="text-2xl text-black" />
            <span className="text-black ml-2">Categories</span>
          </div>
          <div className="flex flex-row my-2 cursor-pointer">
            <FaHeart className="text-2xl text-black" />
            <span className="text-black ml-2">Favorites</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
