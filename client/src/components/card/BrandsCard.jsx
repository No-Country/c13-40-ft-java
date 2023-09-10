import React from "react";

function BrandsCard() {
  return (
    <div className="bg-[#faf6f2] hidden md:flex justify-center  h-48 mt-7  lg:w-full">
      <div className="flex  justify-center gap-36">
        <Image src="/marca1.svg" width={140} height={160} />
        <Image src="/marca2.svg" width={140} height={160} />
        <Image src="/marca3.svg" width={140} height={160} />
        <Image src="/marca4.svg" width={140} height={160} />
        <Image src="/marca5.svg" width={140} height={160} />
      </div>
    </div>
  );
}

export default BrandsCard;
