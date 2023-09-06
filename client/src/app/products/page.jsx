"use client";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import getProducts from "../../services/products";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { useContext } from "react";
import { ComfyContext } from "@/context/ComfyContext";

const Products = () => {
  const { AddToCart } = useContext(ComfyContext);
  const [quantity, setQuantity] = useState(1);

  const [like, setLike] = useState(false);

  const queryProducts = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

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
      data-aos="fade"
      className="w-full min-h-screen mt-12 flex justify-start md:items-center flex-col px-6 my-12"
    >
      {queryProducts?.data?.map((product) => (
        <div key={product.id} className="w-full md:w-5/12 mb-12">
          <h1 className="text-xl md:text-2xl font-thin">{product.name}</h1>
          <div className="relative w-9/12 md:w-full mx-auto mt-8">
            <Image
              className="w-full h-96 object-cover rounded-md"
              src={product.image}
              width={1000}
              height={1000}
              alt={product.name}
            />
            {!like ? (
              <BiHeart
                data-aos="zoom-in"
                onClick={() => setLike(!like)}
                className="absolute bottom-0 right-0 -mb-10 text-3xl cursor-pointer"
              />
            ) : (
              <BiSolidHeart
                data-aos="zoom-in"
                onClick={() => setLike(!like)}
                className="absolute bottom-0 right-0 -mb-10 text-3xl cursor-pointer text-red-500"
              />
            )}
          </div>
          <div className="mt-12 flex flex-col">
            <span className="text-gray-500 line-through text-lg">
              $ 53,000.00
            </span>
            <span className="text-red-500 text-2xl mt-2">
              $ {product.price}
            </span>
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
              <span className="text-sm md:text-base text-gray-500">
                Cantidad:{" "}
              </span>
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
                  console.log("Product:", product);
                  AddToCart(product);
                }}
                className="bg-secondary active:relative active:top-0.5 text-white font-bold w-full mx-auto flex justify-center items-center px-12 py-2 rounded-lg hover:opacity-80"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
