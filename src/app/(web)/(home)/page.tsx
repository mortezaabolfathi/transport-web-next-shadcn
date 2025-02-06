import React from "react";
import dynamic from 'next/dynamic'
import HeroSectionHomePage from "@/template/web/home/heroSection";
const SectionOne = dynamic(()=>import("@/template/web/home/partOne"))


const HomePage = () => {
  return (
    <>
      <HeroSectionHomePage/>
      <SectionOne/>

    </>
  );
};

export default HomePage;
