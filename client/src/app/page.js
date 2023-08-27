"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "./components/slider/Slider";
import Slider2 from "./components/slider/Slider2";
import LoadingModal from "./components/loadingModal/LoadingModal";
import Image from "next/image";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingModal />
      ) : (
        <div
          data-aos="fade"
          className="w-full h-full flex justify-start items-center flex-col mt-8"
        >
          <Image
            className="h-40 lg:h-72 object-cover"
            src="/Garden.png"
            width={2000}
            height={500}
          />
          <Slider />
          <Image
            className="md:hidden mt-4 h-8"
            src="/Divisor.png"
            width={1000}
            height={150}
          />
          <Slider2 />
        </div>
      )}
    </>
  );
};

export default Home;
