"use client";
import { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { ComfyContext } from "@/context/ComfyContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CartItem from "../../components/card/CartItem";
import EmptyCartCard from "@/components/card/EmptyCartCard";
import EmptyCartCard from "@/components/card/EmptyCartCard";

export default function Cart() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  const { cart } = useContext(ComfyContext);
  const shippingCost = 120;
  const subtotal = cart.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );

  // Calcular el total sumando el subtotal y el costo de envío
  const total = subtotal + shippingCost;
  console.log("este es el carrito", cart);
  const { cart } = useContext(ComfyContext);
  const shippingCost = 120;
  const subtotal = cart.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );

  // Calcular el total sumando el subtotal y el costo de envío
  const total = subtotal + shippingCost;
  console.log("este es el carrito", cart);

  return (
    <section data-aos="fade" className="flex flex-col w-full mb-6">
      <div className="flex flex-col justify-center  items-center w-full mt-10 mb-10">
      <div className="flex flex-col justify-center  items-center w-full mt-10 mb-10">
        <p className="text-5xl font-ArchivoBlack  font-extrabold">YOUR CART</p>
        <div className="flex items-center">
          <Link
            href="/productsproducts"
            className="flex items-center cursor-pointer underline decoration-black hover:opacity-70  font-serif 
            duration-200"
          >
            <AiOutlineArrowLeft size={"20px"} className="cursor-pointer  " />
            Continue Shoping
          </Link>
        </div>
      </div>
      {cart.length === 0 ? (
        <EmptyCartCard />
      ) : (
        <>
          <table className="table-auto  mx-3 md:mx-32 lg:mx-52 xl:mx-20   rounded-md">
            <thead>
              <tr className="ml-6 border-b">
                <th className="text-left  text-sm opacity-60 font-semibold">
                  PRODUCT
                </th>
                <th className="hidden sm:table-cell text-center text-sm opacity-60 font-semibold">
                  QUANTITY
                </th>
                <th className="text-center text-sm opacity-60 font-semibold ">
                  PRICE
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((i) => {
                const productTotal = i.product.price * i.quantity;
                const formattedPrice = productTotal.toFixed(2);
                return (
                  <CartItem
                    key={i.product.id}
                    Name={i.product.name}
                    Description={i.product.description}
                    Category={i.product.category}
                    ImgURL={i.product.image}
                    Price={formattedPrice}
                    Product={i.product}
                    Quantity={i.quantity}
                  />
                );
              })}
            </tbody>
      {cart.length === 0 ? (
        <EmptyCartCard />
      ) : (
        <>
          <table className="table-auto  mx-3 md:mx-32 lg:mx-52 xl:mx-20   rounded-md">
            <thead>
              <tr className="ml-6 border-b">
                <th className="text-left  text-sm opacity-60 font-semibold">
                  PRODUCT
                </th>
                <th className="hidden sm:table-cell text-center text-sm opacity-60 font-semibold">
                  QUANTITY
                </th>
                <th className="text-center text-sm opacity-60 font-semibold ">
                  PRICE
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((i) => {
                const productTotal = i.product.price * i.quantity;
                const formattedPrice = productTotal.toFixed(2);
                return (
                  <CartItem
                    key={i.product.id}
                    Name={i.product.name}
                    Description={i.product.description}
                    Category={i.product.category}
                    ImgURL={i.product.image}
                    Price={formattedPrice}
                    Product={i.product}
                    Quantity={i.quantity}
                  />
                );
              })}
            </tbody>

            <tfoot>
              <tr className="">
                <th className="text-left pt-8 text-xl font-ArchivoBlack font-medium xl:px-96">
                  Subtotal
                </th>
                <th className="text-center pt-8 text-xl font-medium ">
                  ${subtotal}
                </th>
                <th className="text-center   text-xl  font-semibold  "></th>
              </tr>
              <tr className="">
                <th className="text-left text-xl font-ArchivoBlack font-medium xl:px-96">
                  Delivery Fee
                </th>
                <th className="text-center text-xl font-ArchivoBlack font-medium ">
                  ${shippingCost}
                </th>
                <th className="text-center text-xl  font-semibold  "></th>
              </tr>
              <tr className="">
                <th className="text-left text-xl font-ArchivoBlack font-semibold xl:px-96">
                  TOTAL
                </th>
                <th className="text-center text-xl font-ArchivoBlack font-semibold ">
                  ${total}
                </th>
                <th className="text-center text-xl  font-semibold  "></th>
              </tr>
            </tfoot>
          </table>

          <div className="flex justify-center items-center">
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-6 xl:px-10 py-3 mb-2 xl:text-xl text-black bg-[#eee3d7] border border-black hover:bg-[#d4b69d] sm:w-auto sm:mb-0"
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
          </div>
        </>
      )}
    </section>
  );
}
