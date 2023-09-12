"use client";
import { useState, useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { ComfyContext } from "@/context/ComfyContext";
import { AuthContext } from "@/context/AuthContext";

const BigProductCard = ({ id, name, image, price, product }) => {
  const { AddToCart, AddToFav, RemoveFromFav } = useContext(ComfyContext);
  const { isLoggedIn } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);

  const [like, setLike] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const plus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div
      key={id}
      className="w-full h-[750px] md:w-5/12 lg:w-4/12 mb-36 flex flex-col justify-between"
    >
      <h1 className="text-lg font-thin">{name}</h1>
      <div className="relative w-9/12 md:w-full mx-auto mt-4 md:-mt-16">
        <Image
          className="w-full h-auto rounded-md"
          src={image}
          width={1000}
          height={1000}
          alt={name}
        />
        {!like ? (
          <BiHeart
            data-aos="zoom-in"
            //  onClick={() => AddToFav(product)}
            onClick={() => {
              AddToFav(product);
              setLike(product);
            }}
            className="absolute bottom-0 right-0 -mb-10 text-3xl cursor-pointer"
          />
        ) : (
          <BiSolidHeart
            data-aos="zoom-in"
            // onClick={() => RemoveFromFav(product)}
            onClick={() => {
              setLike(!like);
            }}
            className="absolute bottom-0 right-0 -mb-10 text-3xl cursor-pointer text-red-500"
          />
        )}
      </div>
      <div className="flex flex-col md:-mt-24">
        <span className="text-gray-500 line-through text-lg">$ 53,000.00</span>
        <span className="text-red-500 text-2xl mt-2">$ {price}</span>
        <span className="text-gray-500 underline text-xs md:text-sm">
          Ver más opciones
        </span>
        <div className="flex justify-start items-center mt-2">
          <FaTruck className="text-lg mr-2" />
          <span className="text-gray-500 text-xs md:text-sm">
            Envíos gratis
          </span>
        </div>
        <div className="mt-2">
          <p className="text-sm md:text-base text-gray-500">
            Talla: <span className="text-black">56 cm x 50 cm</span>
          </p>
        </div>
        <div className="mt-2">
          <span className="text-sm md:text-base text-gray-500">Cantidad: </span>
          <div className="flex justify-start items-center mt-2 mb-4">
            <button
              onClick={minus}
              className={`border w-8 ${
                quantity > 1 ? "active:relative active:top-0.5" : ""
              } border-gray-300 px-2 py-1 rounded-lg`}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={plus}
              className="border w-8 active:relative active:top-0.5 border-gray-300 px-2 py-1 rounded-lg"
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              // console.log("Product:", product, quantity);
              isLoggedIn ? AddToCart(product, quantity) : toast.error("Inicia sesión para agregar al carrito");
              // AddToCart(product, quantity);
            }}
            className="bg-secondary active:relative active:top-0.5 text-white font-bold w-full mx-auto flex justify-center items-center px-12 md:px-6 py-2 rounded-lg hover:opacity-80 text-base md:text-xs"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigProductCard;
