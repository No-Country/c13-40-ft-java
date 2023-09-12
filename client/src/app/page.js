"use client";
import { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "../components/slider/Slider";
import Slider2 from "../components/slider/Slider2";
import LoadingModal from "../components/loadingModal/LoadingModal";
import Image from "next/image";
import { ComfyContext } from "../context/ComfyContext";

import Categories from "../components/categories/Categories";
import BrandsCard from "@/components/card/BrandsCard";
import Link from "next/link";
import Galery from "@/components/galery/Galery";
import InfoCard from "@/components/card/InfoCard";

const Home = () => {
  const { loading, setLoading } = useContext(ComfyContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1200);

  return (
    <>
      {loading ? (
        <LoadingModal />
      ) : (
        <div
          data-aos="fade"
          className="w-full h-full flex justify-start items-center flex-col"
        >
          <div className="w-full lg:h-5/6 flex justify-center items-center bg-primary md:rounded-b-3xl">
            <div className="hidden md:block md:w-6/12 md:h-full flex flex-col justify-center items-center pl-20">
              <h2 className="xl:text-6xl text-3xl -mt-12 mb-2">Exclusive</h2>
              <h2 className="xl:text-6xl text-3xl mb-8">
                Furniture Collection
              </h2>
              <p className="mb-8 text-xs md:text-base w-11/12">
                Explore different categories. Find the best deals.
              </p>
              <Link
                href="/products"
                className="bg-secondary text-white font-bold py-4 px-12 rounded-md"
              >
                Shop now
              </Link>
            </div>
            <div className="w-full md:w-6/12 h-auto md:mb-16 md:mt-8">
              <Image
                className="w-full md:w-8/12 md:rounded-md"
                src="/home.png"
                width={1000}
                height={1000}
                alt="portada"
              />
            </div>
          </div>
          <Slider />
          <Categories />
          <BrandsCard />
          <Slider2 />
          <Galery />
          {/* <InfoCard /> */}
        </div>
      )}
    </>
  );
};

export default Home;
