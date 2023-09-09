import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { ComfyContext } from "@/context/ComfyContext";
import { Tooltip } from "@mui/material";

function QuantityButtons({ product }) {
  const { RemoveFromCart } = useContext(ComfyContext);

  return (
    <div className=" flex items-center justify-center sm:mx-10">
      <div className="bg-orange-100 flex items-center justify-center gap-3 sm:gap-5 sm:h-10 w-28 sm:w-32 text-zinc-600  border border-zinc-950 ">
        <button>
          <IoIosRemove
            className="cursor-pointer text-black hover:opacity-50"
            size="20px"
          />
        </button>
        <span className="text-xl text-black"> 1 </span>
        <button>
          <IoIosAdd
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
    </div>
  );
}
export default QuantityButtons;
