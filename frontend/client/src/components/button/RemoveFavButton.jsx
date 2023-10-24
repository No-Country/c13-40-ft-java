import React from "react";
import { useContext } from "react";
import { ComfyContext } from "@/context/ComfyContext";
import { HiOutlineTrash } from "react-icons/hi";

function RemoveFavButton({ product }) {
  const { RemoveFromFav } = useContext(ComfyContext);
  return (
    <button
      type="button"
      onClick={() => {
        console.log("Product in fave name :", product);
        RemoveFromFav(product);
      }}
      className="px-3 py-2.5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-red-200 font-semibold text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500    transition-all text-sm "
    >
      <HiOutlineTrash size="22px" />
    </button>
  );
}

export default RemoveFavButton;
