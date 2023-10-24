import Image from "next/image";
import React from "react";

function BrandsCard() {
  return (
    <div className="bg-[#faf6f2] flex  justify-center   w-full h-auto md:h-48 mt-7 ">
      <div className="hidden md:flex flex-col md:flex-row md:py-0 lg:gap-36  py-8 gap-20">
        <Image src="/marca1.svg" width={140} height={160} alt="brand name" />
        <Image src="/marca2.svg" width={140} height={160} alt="brand name" />
        <Image src="/marca3.svg" width={140} height={160} alt="brand name" />
        <Image src="/marca4.svg" width={140} height={160} alt="brand name" />
        <Image src="/marca5.svg" width={140} height={160} alt="brand name" />
      </div>
    </div>
  );
}

export default BrandsCard;
