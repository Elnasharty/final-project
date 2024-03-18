import React from "react";
import { Link } from "react-router-dom";
import AllProducts from "../AllProducts/AllProducts.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../HomeSlider/simpleSlider.jsx";
import CategorySlider from "../CatogerySlide/CategorySlide.jsx";

export default function Home() {
  return (
    <>
      <div className="my-4">
        <SimpleSlider />
        <CategorySlider />
        <AllProducts />
      </div>
    </>
  );
}








