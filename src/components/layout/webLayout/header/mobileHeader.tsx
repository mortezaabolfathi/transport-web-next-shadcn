"use client";
import { IoClose, IoMenu } from "react-icons/io5";
import { headerData } from "@/data/dummyData";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LogoIcon from "@/components/logoIcon";
import CallBox from "@/components/callBox";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { TbBrandTelegram } from "react-icons/tb";
import { AiOutlineWhatsApp } from "react-icons/ai";
 const connect = [
    {
      text: "اینستا ",
      icon: <IoLogoInstagram color="red" />,
      url: "/",
      id: 1,
    },
    {
      text: "واتس اپ",
      url: "https://wa.me/989144040525?text=سلام%2C%20می‌خواهم%20با%20شما%20در%20تماس%20باشم.",
      icon: <AiOutlineWhatsApp color="green"/>,
      id: 2,
    },
    {
      text: "تلگرام",
      url: "https://t.me/@masoudap",
      icon: <TbBrandTelegram  color="blue"/>,
      id: 3,
    },
  ];

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      {/* open */}
      <span className="p-4  w-full flex items-center justify-between ">
        <LogoIcon size={40} />
        <IoMenu
          onClick={() => setShowMenu(true)}
          className=" rounded-sm text-blue-800"
          size={40}
        />
      </span>

      <div className="relative z-40">
        <ul
          className={`
          fixed h-screen w-screen top-0 font-bold flex flex-col 
          justify-start items-center gap-10 transition-all 
          duration-300 ease-linear left-0  bg-primary
          ${showMenu ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <span
            onClick={() => setShowMenu(false)}
            className="p-4  w-full flex items-center justify-end "
          >
            <IoClose className=" text-white" size={45} />
          </span>
          {headerData.map((item) => (
            <li
              key={item.id}
              className="border-b-2 text-white font-semibold text-5xl "
            >
              <Link href={item.url} onClick={() => setShowMenu(false)}>
                <Button variant={"ghost"} className="text-xl">
                  {item.text}{" "}
                </Button>
              </Link>
            </li>
          ))}
          
          <p className="text-xl font-bold text-blue-700 border-t-2 w-full text-center p-4">راه‌های ارتباطی با بازرگانی یاراد</p>

          <ul className="flex flex-row gap-4 text-white">
            {connect.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>
                <Button variant={"ghost"}  className="hover:font-bold text-2xl" >
                 {item.icon} {item.text}{" "}
                </Button>
                </Link>
              </li>
            ))}
          </ul>
          <span className="flex flex-row items-center text-blue-800 gap-4">
            <CallBox color="text-blue-800" size={40}/>
          </span>
        </ul>
        
        
      </div>
    </div>
  );
};

export default MobileHeader;
