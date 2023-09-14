import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Checkout() {
  return (
    <section data-aos="fade" className="flex flex-col w-full mb-6">
      <div className="flex flex-col justify-center  items-center w-full mt-10 mb-10">
        <p className="text-5xl font-ArchivoBlack uppercase font-extrabold">
          Checkout
        </p>
        <div className="flex items-center">
          <Link
            href="/cart"
            className="flex items-center cursor-pointer underline decoration-black hover:opacity-70  font-serif 
        duration-200"
          >
            <AiOutlineArrowLeft size={"20px"} className="cursor-pointer  " />
            Cart
          </Link>
        </div>
        <div className="flex flex-col items-center mt-9 mx-3 md:mx-32 lg:mx-52 xl:mx-20 ">
          <h2> Work in Progress........</h2>
          <Image
            src="/designer-giving-a-keynote-2.svg"
            alt="empty"
            width={400}
            height={400}
          />

          <button></button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
