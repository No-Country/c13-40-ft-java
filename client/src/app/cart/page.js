import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CartItem from "../components/cards/CartItem";
export default function Cart() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex justify-center w-full">
        {/* flecha para regresar */}
        <Link href="/" className=" cursor-pointer ">
          <AiOutlineArrowLeft
            size={"30px"}
            className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
          />
        </Link>
        <p className="text-3xl font-serif font-extrabold">YOUR CART</p>
      </div>

      <div className="flex flex-col mx-3 gap-2 rounded-md">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </section>
  );
}
