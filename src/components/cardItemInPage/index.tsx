import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
interface TCardItemInPage {
  rowRevers?: boolean
  text: {
    textContent: string;
    textHeader: string;
  };
  boxColor ?: string;
  animationImage?: string;
  imageBox : React.ReactNode;
  buttonItem?: {
    textButton: string;
    colorButton?: string;
    link: string;
  };
}
const CardItemInPage: React.FC<TCardItemInPage> = ({
  text,
  buttonItem,
  rowRevers = false, 
  imageBox,
  boxColor="bg-white"
}) => {
  return (
    <div className={`flex ${rowRevers ?  "flex-row-reverse": "flex-row" }  ${boxColor} rounded-xl justify-around  mt-8  py-16`}>
      <div
        className={`w-1/2 flex flex-col gap-3 justify-center`}
      >
        <h2 className="text-3xl font-bold ">{text?.textHeader}</h2>
        <p className="pr-6">{text?.textContent?.substring(0, 359) + "..."}</p>
        {buttonItem && (
          <div className="flex  justify-end items-start">
          <Link href={buttonItem?.link}>
            <Button size={"lg"} variant={"link"} >{buttonItem?.textButton}</Button>{" "}
          </Link>

          </div>
        )}
      </div>
      <div className="w-1/3 flex justify-center items-center">
        {imageBox}
      </div>
 
    </div>
  );
};

export default CardItemInPage;
