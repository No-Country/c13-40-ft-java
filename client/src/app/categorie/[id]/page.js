"use client";
import { useEffect } from "react";
import { useQuery } from "react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import BigProductCard from "@/components/card/BigProductCard";
import getCategories from "../../../services/categorie";

const Categorie = ({ params }) => {
  const queryCategorie = useQuery({
    queryKey: ["categorie"],
    queryFn: () => getCategories(params.id),
    retry: 10,
  });

  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  return (
    <div
      data-aos="fade"
      className="w-full min-h-screen mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-2 px-6 my-12"
    >
      {queryCategorie?.data?.products?.map((product) => (
        <BigProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          product={product}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default Categorie;
