import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

function QuantityButtons() {
  return (
    <div className=" flex items-center justify-center sm:mx-10">
      <div className="flex items-center justify-center gap-3 sm:gap-5 sm:h-10 w-28 sm:w-32 text-zinc-600  border border-zinc-950 rounded-3xl">
        <button>
          <IoIosRemove
            className="cursor-pointer hover:text-amber-700"
            size="23px"
          />
        </button>
        <span className="text-xl"> 1 </span>
        <button>
          <IoIosAdd
            className="cursor-pointer hover:text-amber-700"
            size="23px"
          />
        </button>
      </div>
      <FaTrash
        className=" ml-1 cursor-pointer hover:text-red-600 duration-300"
        size="22px"
      />
    </div>
  );
}

export default QuantityButtons;
