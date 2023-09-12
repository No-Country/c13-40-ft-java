"use client";
import FavoritesItem from "@/components/card/FavoritesItem";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ComfyContext } from "@/context/ComfyContext";
import { useContext } from "react";
function Favorites() {
  const { favs } = useContext(ComfyContext);
  console.log("list favorites", favs);
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
              // Category={product.category}
              ImgURL={product.image}
              Price={product.price}
              product={product}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Favorites;
