import { AiFillHeart, AiOutlineArrowLeft } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
// nombres de props de ejemplo
function CartItem({
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductImg,
}) {
  return (
    <article className="flex rounded-md bg-slate-50 drop-shadow-lg">
      {/* revisar prop img */}
      <img
        className="w-28 h-28 rounded"
        src="https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
      <div className="flex flex-col ml-4">
        <p className="text-lg font-bold">Produc Name</p>
        <p>Lorem ipsum dolor it </p>
        <p className="text-lg font-bold">$130</p>
        {/* // falta un contador para agregar mas unidades  */}
      </div>
      <div className="flex flex-col items-end ml-16 gap-14 text-2xl">
        {/* cambio de corazon al agregar fav */}
        <AiFillHeart className="cursor-pointer hover:text-red-950" />
        <FaTrash className="cursor-pointer hover:text-red-600 duration-200" />
      </div>
    </article>
  );
}

export default CartItem;
