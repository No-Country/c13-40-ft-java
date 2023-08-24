import Link from "next/link";
// Add Imagen de fondo y eskeleton
// Add Prop de Href
function CardCategories({ Categorie, imageUrl }) {
  return (
    <article
      className="w-4/5 h-48 mt-8 rounded grid place-items-center drop-shadow-xl bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <Link href="" className="text-3xl text-gray-50 font-sans font-extrabold">
        {Categorie}
      </Link>
    </article>
  );
}

export default CardCategories;
