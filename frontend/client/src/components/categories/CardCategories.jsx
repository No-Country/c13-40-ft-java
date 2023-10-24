// Add Imagen de fondo y eskeleton
// Add Prop de Href
function CardCategories({ Categorie, imageUrl }) {
  return (
    <article
      className="w-4/5 h-48 lg:w-[480px] lg:h-[580px]  mt-8 rounded grid place-items-center drop-shadow-xl bg-cover bg-no-repeat bg-center
       transition ease-in-out duration-1000 delay-75 hover:saturate-200"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <h4 className="text-3xl text-gray-50 font-sans font-extrabold">
        {Categorie}
      </h4>
    </article>
  );
}

export default CardCategories;
