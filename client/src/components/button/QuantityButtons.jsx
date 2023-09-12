import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { ComfyContext } from "@/context/ComfyContext";
import { Tooltip } from "@mui/material";

function QuantityButtons({ product, quantity }) {
  const { RemoveFromCart, updateCartItemQuantity } = useContext(ComfyContext);
  console.log("boton de", quantity);
  const handleQuantityIncrease = () => {
    updateCartItemQuantity(product.id, quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      updateCartItemQuantity(product.id, quantity - 1);
    }
  };

import { useContext } from "react";
import { ComfyContext } from "@/context/ComfyContext";
import { Tooltip } from "@mui/material";

function QuantityButtons({ product, quantity }) {
  const { RemoveFromCart, updateCartItemQuantity } = useContext(ComfyContext);
  console.log("boton de", quantity);
  const handleQuantityIncrease = () => {
    updateCartItemQuantity(product.id, quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      updateCartItemQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className=" flex items-center justify-center sm:mx-10">
      <div className="bg-[#eee3d7] flex items-center justify-center gap-3 sm:gap-5 sm:h-10 w-28 sm:w-32 text-zinc-600  border border-zinc-950 ">
        <button onClick={handleQuantityDecrease}>
          <IoIosRemove
            className="cursor-pointer text-black hover:opacity-50"
            className="cursor-pointer text-black hover:opacity-50"
            size="20px"
          />
        </button>
        <span className="text-xl text-black"> {quantity} </span>
        <button onClick={handleQuantityIncrease}>
        <span className="text-xl text-black"> {quantity} </span>
        <button onClick={handleQuantityIncrease}>
          <IoIosAdd
            className="cursor-pointer text-black hover:opacity-50"
            className="cursor-pointer text-black hover:opacity-50"
            size="20px"
          />
        </button>
      </div>
      <Tooltip title="Delete" placement="right">
        <button
          onClick={() => {
            console.log("elimar el siguiente:", product);
            RemoveFromCart(product);
          }}
        >
          <FaTrash
            className=" ml-1 cursor-pointer hover:text-orange-900 duration-300"
            size="22px"
          />
        </button>
      </Tooltip>
      <Tooltip title="Delete" placement="right">
        <button
          onClick={() => {
            console.log("elimar el siguiente:", product);
            RemoveFromCart(product);
          }}
        >
          <FaTrash
            className=" ml-1 cursor-pointer hover:text-orange-900 duration-300"
            size="22px"
          />
        </button>
      </Tooltip>
    </div>
  );
}
export default QuantityButtons;
