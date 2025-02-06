import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
interface TCardItemInPage {
  rowRevers?: boolean
  text: {
    textContent: string;
    textHeader: string;
  };
  animationImage?: string;
  imageBox : any;
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
  imageBox
}) => {
  return (
    <div className={`flex ${rowRevers ?  "flex-row-reverse": "flex-row" }  justify-around  mt-8`}>
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
