"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { BiSolidStore } from "react-icons/bi";
import { BiSolidCategory } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { HiInformationCircle } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const links = [
    {
      name: "Home",
      link: "/",
      icon: <AiFillHome className="text-base mr-2 cursor-pointer" />,
    },
    {
      name: "Products",
      link: "/products",
      icon: <BiSolidStore className="text-base mr-2 cursor-pointer" />,
    },
    {
      name: "Favorites",
      link: "/favorites",
      icon: <MdFavorite className="text-base mr-2 cursor-pointer" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <HiInformationCircle className="text-base mr-2 cursor-pointer" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <AiFillMessage className="text-base mr-2 cursor-pointer" />,
    },
  ];

  return (
    <div className="w-full sticky top-0 z-40">
      <div className="h-20 w-full bg-primary flex justify-between items-center p-4">
        <Image
          className="hidden md:block"
          src="/logo.svg"
          alt="Comfy logo"
          width={100}
          height={100}
        />
        <GiHamburgerMenu
          onClick={() => setOpen(!open)}
          className="text-2xl text-black cursor-pointer md:hidden"
        />
        <div className="hidden md:block flex justify-center items center text-black font-bold">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.link}
              className="cursor-pointer mx-2 font-bold hover:text-white transition-all duration-500 ease"
            >
              {l.name}
            </Link>
          ))}
        </div>
        <Image
          className="mx-auto md:hidden"
          src="/logo.svg"
          alt="logo mobile"
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
          {links.map((l) => (
            <Link
              className="my-2 flex justify-center items-center font-bold hover:text-white transition-all duration-500 ease"
              key={l.name}
              href={l.link}
              onClick={() => setOpen(!open)}
            >
              {l.icon} {l.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
