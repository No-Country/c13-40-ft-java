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
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="w-full overflow-hidden cursor-pointer ml-16 z-0 mt-6">
        <h2 className="font-bold text-xl mb-2"> ¡Lo más buscado! </h2>
        <Slider {...settings}>
          <div className="bg-tertiary h-28 lg:h-52 border boder-1 border-black rounded-lg overflow-hidden">
            <h3>1</h3>
          </div>
          <div className="bg-tertiary h-28 lg:h-52 border boder-1 border-black rounded-lg overflow-hidden">
            <h3>2</h3>
          </div>
          <div className="bg-tertiary h-28 lg:h-52 border boder-1 border-black rounded-lg overflow-hidden">
            <h3>3</h3>
          </div>
          <div className="bg-tertiary h-28 lg:h-52 border boder-1 border-black rounded-lg overflow-hidden">
            <h3>4</h3>
          </div>
          <div className="bg-tertiary h-28 lg:h-52 border boder-1 border-black rounded-lg overflow-hidden">
            <h3>5</h3>
          </div>
          <div className="bg-tertiary h-28 lg:h-52 border boder-1 border-black rounded-lg overflow-hidden">
            <h3>6</h3>
          </div>
          <div className="bg-tertiary h-28 lg:h-52 border boder-1 border-black rounded-lg overflow-hidden">
            <h3>7</h3>
          </div>
          <div className="bg-tertiary h-28 lg:h-52 border boder-1 border-black rounded-lg overflow-hidden">
            <h3>8</h3>
          </div>
          <div className="bg-tertiary h-28 lg:h-52 border boder-1 border-black rounded-lg overflow-hidden">
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
