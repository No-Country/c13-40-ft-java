"use client";
import { useEffect } from "react";
import { useQuery } from "react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import getProducts from "../../services/products";
import BigProductCard from "@/components/card/BigProductCard";

const Products = () => {

  const queryProducts = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    retry: 10,
  });

  console.log(queryProducts.data);

  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  return (
    <div
      data-aos="fade"
      className="w-full min-h-screen mt-12 flex justify-start md:items-center flex-col px-6 my-12"
    >
      {queryProducts?.data?.map((product) => (
        <BigProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
