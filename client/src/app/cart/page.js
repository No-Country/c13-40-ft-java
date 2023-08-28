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

      <table className="table-auto mx-3 md:mx-32 lg:mx-52 xl:mx-96  rounded-md">
        <thead>
          <tr className="ml-6 border-b">
            <th className="text-left">Products</th>
            <th className="hidden sm:table-cell text-center">Quantity</th>
            <th className="text-center">Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Agregar componente dinamicamente */}
          <CartItem />
          <CartItem />
          <CartItem />
        </tbody>
      </table>
    </section>
  );
}
