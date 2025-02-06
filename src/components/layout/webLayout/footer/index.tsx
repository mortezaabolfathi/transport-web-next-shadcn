import CallBox from "@/components/callBox";
import LogoIcon from "@/components/logoIcon";
import { Button } from "@/components/ui/button";
import { connect, headerData } from "@/data/dummyData";
import React from "react";

const FooterWeb = () => {

  return (
    <div className="flex flex-col gap-2 bg-white rounded-t-xl py-4">
      <div className="flex flex-row justify-around border-b-2 py-4">
        <div className="flex flex-row gao-4 items-center">
          <LogoIcon size={40} />
          <p className="flex font-semibold text-3xl text-blue-600">
            گروه بازرگانی یارد
          </p>
        </div>
        <p className="flex flex-row gap-2 items-center ">
          <CallBox size={40} />
        </p>
      </div>
      <div className="grid grid-cols-3">
        
         
          <p className="text-sm px-4">
            بشه آدرس
          </p>
       
        <div className="flex flex-col items-start">   
          <p className="text-xl font-bold">دسترسی سریع</p>
          <ul className=" md:flex flex-row  justify-center  rounded-xl p-1">
            {headerData.map((item) => (
              <li key={item.id}>
                <Button variant={"ghost"} className="hover:font-bold">
                  {item.text}{" "}
                </Button>
              </li>
            ))}
           
          </ul>
        
        </div>
        <div className=" flex flex-col items-start ">
              <p className="text-xl font-bold">راه‌های ارتباطی با بازرگانی یارد</p>
              <ul className=" md:flex flex-row  justify-center  rounded-xl p-1">
            {connect.map((item) => (
              <li key={item.id}>
                <Button variant={"ghost"} className="hover:font-bold">
                  {item.text}{" "}
                </Button>
              </li>
            ))}
           
          </ul>
            </div>
      </div>
    </div>
  );
};

export default FooterWeb;
