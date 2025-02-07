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
    <div className={`flex ${rowRevers ?  "md:flex-row-reverse flex-col": "md:flex-row flex-col" }  ${boxColor} rounded-xl justify-around  mt-8  md:py-16 p-2`}>
      <div
        className={`md:w-1/2 flex flex-col gap-3 justify-center`}
      >
        <h2 className="md:text-3xl text-2xl font-bold ">{text?.textHeader}</h2>
        <p className="pr-6 text-xl/9 md:text-base/7">{text?.textContent?.substring(0, 359) + "..."}</p>
        {buttonItem && (
          <div className="flex  justify-end items-start">
          <Link href={buttonItem?.link}>
            <Button size={"lg"} variant={"link"} >{buttonItem?.textButton}</Button>{" "}
          </Link>

          </div>
        )}
      </div>
      <div className="md:w-1/3 flex justify-center items-center mt-3 mb-4 md:m-0 ">
        {imageBox}
      </div>
 
    </div>
  );
};

export default CardItemInPage;
