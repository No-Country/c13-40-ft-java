import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
const Product = () => {
  return (
    <div className="w-full mt-12 flex justify-start md:items-center flex-col px-4 my-8">
      <div className="w-full md:w-5/12">
        <h1 className="text-xl md:text-2xl font-thin">
          Buró Mobi Muebles Kabul
        </h1>
        <div className="relative w-9/12 md:w-full mx-auto mt-8">
          <Image
            className="w-full"
            src="/buroMobi.png"
            width={1000}
            height={1000}
            alt="mueble"
          />
          <BiHeart className="absolute bottom-0 right-0 -mb-10 text-3xl cursor-pointer" />
        </div>
        <div className="mt-12 flex flex-col">
          <span className="text-gray-500 line-through">$ 53,000.00</span>
          <span className="text-red-500 text-2xl mt-2">$ 2</span>
          <span className="text-gray-500 underline text-xs">
            Ver más opciones
          </span>
          <div className="flex justify-start items-center mt-2">
            <FaTruck className="text-lg mr-2" />
            <span className="text-gray-500 text-xs">Envíos gratis</span>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Talla: <span className="text-black">56 cm x 50 cm</span>
            </p>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-500">Cantidad: </span>
            <div className="flex justify-start items-center mt-2 mb-4">
              <button className="border w-8 border-gray-300 px-2 py-1 rounded-lg">
                -
              </button>
              <span className="mx-2">1</span>
              <button className="border w-8 border-gray-300 px-2 py-1 rounded-lg">
                +
              </button>
            </div>
            <button className="bg-secondary text-white font-bold w-full mx-auto flex justify-center items-center px-12 py-2 rounded-lg hover:opacity-80">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
