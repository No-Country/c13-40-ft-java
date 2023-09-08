function AddToCartButton({ product }) {
  return (
    <a
      onClick={() => {
        console.log("Product:", product);
      }}
      className="relative px-3 py-2  md:px-5 md:py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded shadow-inner group"
    >
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
        Add To Cart
      </span>
    </a>
  );
}

export default AddToCartButton;
