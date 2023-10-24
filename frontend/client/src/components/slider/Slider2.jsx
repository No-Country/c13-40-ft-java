"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCards from "../card/SliderCards";
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
      <div className="w-full lg:w-8/12  xl:w-10/12 overflow-hidden cursor-pointer ml-16 lg:ml-0 z-0 mt-6">
        <h2 className="xl:ml-14 font-bold text-xl mb-2"> New Products </h2>
        <Slider {...settings}>
          <SliderCards idx={5} />
          <SliderCards idx={6} />
          <SliderCards idx={7} />
          <SliderCards idx={8} />
          <SliderCards idx={9} />
        </Slider>
      </div>
    );
  }
}
