import AddToCartButton from "../Buttons/AddToCartButton";

// nombres de props de ejemplo
function FavoritesItem({
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductImg,
}) {
  return (
    <tr className="border-b">
      <td className="flex py-3 ">
        <img
          className="w-28 h-28 rounded
                md:w-32 md:h-32 xl:w-40 xl:h-40"
          src="https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Product"
        />
        <div className="flex flex-col flex-grow ml-4 xl:ml-9">
          <p className="text-lg lg:text-xl font-ArchivoBlack font-medium Display uppercase ">
            Product
          </p>
          <p className="lg:text-lg mt-3 sm:mt-0"> Category</p>
          <p className="hidden lg:table-cell text-left mt-5">
            ProductDescriptionLorem ipsum dolor, sit amet consectetur
            adipisicing elit
          </p>
          <div className="flex mt-5 sm:hidden">
            <AddToCartButton />
            {/* // Add to cart btn */}
          </div>
        </div>
      </td>
      {/* fila cantidad oculta en mobile */}
      <td className="hidden sm:table-cell   text-center ">
        <AddToCartButton />
        {/* // Add to cart btn */}
      </td>
      <td className="text-center">
        <span className="lg:text-xl font-medium font-ArchivoBlack">
          $149.90
        </span>
      </td>
    </tr>
  );
}

export default FavoritesItem;
