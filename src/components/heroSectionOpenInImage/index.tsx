
import style from "@/style/animation.module.css";
import Image from "next/image";
import React from "react";
interface THeroSectionOpenInImage{
    titleText : string,
    des:string,
    image : any
}
const HeroSectionOpenInImage:React.FC<THeroSectionOpenInImage> = ({des, image, titleText}) => {
  return (
    <div className="relative  ">
      <div className={`${style.openInToOut}`}>
        <Image
          src={image}
          alt="Hero"
          className="w-full object-cover rounded-xl opacity-80"
        />
      </div>
      <div className="md:absolute top-0  h-screen w-full text-primary md:flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl text-center md:text-6xl font-bold sm:bg-white bg-opacity-80  text-blue-700  p-8 rounded-xl">
          {titleText}
        </h1>
       <p className="text-xl/9 text-center sm:p-10 sm:bg-blue-300 sm:w-3/4 bg-opacity-80 bg-white  rounded-xl p-4">
       {des}
       </p>
      </div>
    </div>
  );
};

export default HeroSectionOpenInImage;
