import React from "react";
import dynamic from "next/dynamic";
import HeroSectionHomePage from "@/template/web/home/heroSection";
import Carousel from "@/template/web/home/partOne/carusel";
const SectionOne = dynamic(() => import("@/template/web/home/partOne"));

const HomePage = () => {
  return (
    <div className="">
      <Carousel />
      {/* <div className="flex items-center justify-center container">
        <Slider />
      </div> */}
      <SectionOne />
    </div>
  );
};

export default HomePage;
