import QuantityButtons from "../button/QuantityButtons";

// nombres de props de ejemplo
function CartItem({
  Name,
  Category,
  Description,
  Price,
  ImgURL,
  Product,
  Quantity,
}) {
  return (
    <tr className="border-b">
      <td className="flex py-3 ">
        <img
          className="w-28 h-28 rounded
                md:w-32 md:h-32 xl:w-40 xl:h-40"
          src={ImgURL}
          alt={Name}
        />
        <div className="flex flex-col flex-grow ml-4 xl:ml-9">
          <p className="text-lg lg:text-xl font-ArchivoBlack font-medium Display uppercase ">
            {Name}
          </p>
          <p className="lg:text-lg mt-3 sm:mt-0"> {Description} </p>
          <p className="hidden text-left mt-5"></p>
          <div className="flex mt-5 sm:hidden">
            {console.log("cantidad es ", Quantity)}
            <QuantityButtons product={Product} quantity={Quantity} />
          </div>
        </div>
      </td>
      {/* fila cantidad oculta en mobile */}
      <td className="hidden sm:table-cell   text-center ">
        <QuantityButtons product={Product} quantity={Quantity} />
      </td>
      <td className="text-center">
        <span className="lg:text-xl font-medium font-ArchivoBlack">
          ${Price}
        </span>
      </td>
    </tr>
  );
}

export default CartItem;
