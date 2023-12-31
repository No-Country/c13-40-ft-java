"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const LoadingModal = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="w-full h-screen absolute top-0 flex justify-center items-center bg-white z-50">
      <Image
        className="w-32"
        data-aos="zoom-in"
        src="/LoadingLogo.png"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default LoadingModal;
