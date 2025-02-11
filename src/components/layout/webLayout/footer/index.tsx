import CallBox from "@/components/callBox";
import LogoIcon from "@/components/logoIcon";
import { Button } from "@/components/ui/button";
import { headerData } from "@/data/dummyData";
import { IoLogoInstagram } from "react-icons/io5";
import { TbBrandTelegram } from "react-icons/tb";
import { AiOutlineWhatsApp } from "react-icons/ai";

import React from "react";
import Link from "next/link";

const FooterWeb = () => {
  const connect = [
    {
      text: "اینستا ",
      icon: <IoLogoInstagram />,
      url: "/",
      id: 1,
    },
    {
      text: "واتس اپ",
      url: "https://wa.me/989144040525?text=سلام%2C%20می‌خواهم%20با%20شما%20در%20تماس%20باشم.",
      icon: <AiOutlineWhatsApp />,
      id: 2,
    },
    {
      text: "تلگرام",
      url: "https://t.me/@masoudap",
      icon: <TbBrandTelegram />,
      id: 3,
    },
  ];

  return (
    <div className="flex flex-col gap-2 bg-white rounded-t-xl py-4">
      <div className="flex md:flex-row flex-col gap-4 justify-around items-center   border-b-2 py-4">
        <div className="flex flex-row  gao-4 items-center">
          <LogoIcon size={40} />
          <p className="flex font-semibold text-3xl text-blue-600">
            گروه بازرگانی یاراد
          </p>
        </div>
        <p className="flex flex-row gap-2 items-center ">
          <CallBox size={40} />
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1">
      <div className="flex flex-col  md:items-start items-center justify-center md:pr-8">
          <p className="text-xl font-bold">آدرس :</p>
          <p className="text-center md:text-start px-8">منطقه آزاد ماکو بازرگان خیابان امام روبروی قرنطینه جهاد کشاورزی
          بازرگانی یاراد</p>
        </div>

        <div className="flex flex-col  md:items-start items-center justify-center">
          <p className="text-xl font-bold">دسترسی سریع</p>
          <ul className="p-1 flex flex-row">
            {headerData.map((item) => (
              <li key={item.id}>
                <Link href={item.url}> 
                <Button variant={"ghost"} className="hover:font-bold">
                  {item.text}{" "}
                </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex flex-col md:items-start items-center justify-center">
          <p className="text-xl font-bold">راه‌های ارتباطی با بازرگانی یارد</p>
          <ul className="p-1 flex flex-row">
            {connect.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>
                <Button variant={"ghost"} className="hover:font-bold" >
                 {item.icon} {item.text}{" "}
                </Button>
                
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterWeb;
