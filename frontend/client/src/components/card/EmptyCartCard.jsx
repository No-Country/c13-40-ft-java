import Image from "next/image";
import React from "react";

function EmptyCartCard() {
  return (
    <div className="flex flex-col items-center  mx-3 md:mx-32 lg:mx-52 xl:mx-20 ">
      <h2>The Cart is empty</h2>
      <Image
        src="/add-products-to-cart-or-basket.svg"
        alt="empty"
        width={400}
        height={400}
      />
      <button></button>
    </div>
  );
}

export default EmptyCartCard;
