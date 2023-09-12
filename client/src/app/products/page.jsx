"use client";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
      className="w-full min-h-screen mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-2 px-6 my-12"
    >
      {queryProducts.isLoading && (
        <div className="w-9/12 md:w-full flex flex-col justify-center items-center md:flex-row -mt-72">
          <div>
            <Skeleton width={"100%"} height={200} />
            <Skeleton className="mt-6 mb-2" width={300} height={20} />
            <Skeleton className="mb-2" width={300} height={20} />
            <Skeleton width={300} height={20} />
          </div>
        </div>
      )}
      {queryProducts?.data?.map((product) => (
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

export default Products;
