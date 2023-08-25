"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="w-full lg:w-8/12 overflow-hidden cursor-pointer ml-16 lg:ml-0 z-0 mt-6">
        <h2 className="font-medium text-xl mb-2"> Nuevos artículos </h2>
        <Slider {...settings}>
          <div className="h-28 lg:h-52">
            <div className="bg-tertiary w-11/12 h-full border boder-1 border-black rounded-lg overflow-hidden"></div>
          </div>
          <div className="h-28 lg:h-52">
            <div className="bg-tertiary w-11/12 h-full border boder-1 border-black rounded-lg overflow-hidden"></div>
          </div>
          <div className="h-28 lg:h-52">
            <div className="bg-tertiary w-11/12 h-full border boder-1 border-black rounded-lg overflow-hidden"></div>
          </div>
          <div className="h-28 lg:h-52">
            <div className="bg-tertiary w-11/12 h-full border boder-1 border-black rounded-lg overflow-hidden"></div>
          </div>
          <div className="h-28 lg:h-52">
            <div className="bg-tertiary w-11/12 h-full border boder-1 border-black rounded-lg overflow-hidden"></div>
          </div>
          <div className="h-28 lg:h-52">
            <div className="bg-tertiary w-11/12 h-full border boder-1 border-black rounded-lg overflow-hidden"></div>
          </div>
        </Slider>
      </div>
    );
  }
}
