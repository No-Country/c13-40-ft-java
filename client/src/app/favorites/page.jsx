"use client";
import FavoritesItem from "@/components/cards/FavoritesItem";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ComfyContext } from "@/context/ComfyContext";
import { useContext } from "react";
function Favorites() {
  const { favs } = useContext(ComfyContext);
  return (
    <section className="flex flex-col w-full mb-6">
      <div className="flex flex-col justify-center xl:mx-7  items-center w-full mt-10 mb-10">
        <p className="text-5xl font-ArchivoBlack  font-extrabold">FAVORITES</p>
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center cursor-pointer underline decoration-black hover:opacity-70  font-serif 
        duration-200"
          >
            <AiOutlineArrowLeft size={"20px"} className="cursor-pointer  " />
            Continue Shoping
          </Link>
        </div>
      </div>

      <table className="table-auto drop-shadow- mx-3 md:mx-32 lg:mx-52 xl:mx-20   rounded-md">
        <thead>
          <tr className="ml-6 border-b">
            <th className="text-left  text-sm opacity-60 font-semibold">
              PRODUCT
            </th>
            <th className="hidden sm:table-cell text-center text-sm opacity-60 font-semibold">
              ADD
            </th>
            <th className="text-center text-sm opacity-60 font-semibold ">
              PRICE
            </th>
            <th className="hidden md:table-cell text-center text-sm opacity-60 font-semibold ">
              REMOVE
            </th>
          </tr>
        </thead>
        <tbody>
          {favs.map((product) => (
            <FavoritesItem
              key={product.id}
              Name={product.name}
              Description={product.description}
              Category={product.category}
              ImgURL={product.image}
              Price={product.price}
              product={product}
            />
          ))}
        </tbody>
      </table>
      {/* boton de Accion */}
      {/* <div className="flex justify-center items-center">
        <a
          href="#_"
          className="inline-flex items-center justify-center w-full px-6 xl:px-10 py-3 mb-2 xl:text-xl text-black bg-orange-100 border border-black hover:bg-orange-200 sm:w-auto sm:mb-0"
        >
          Checkout
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div> */}
    </section>
  );
}

export default Favorites;
