import React from "react";
import Image from "next/image";

function EmptyFavsCard() {
  return (
    <div className="flex flex-col items-center  mx-3 md:mx-32 lg:mx-52 xl:mx-20 ">
      <h2>The Favorites is empty</h2>
      <Image src="/be-patient-2.svg" alt="empty" width={400} height={400} />

      <button></button>
    </div>
  );
}

export default EmptyFavsCard;
