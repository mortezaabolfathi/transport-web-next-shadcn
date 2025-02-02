"use client";
import { IoClose, IoMenu } from "react-icons/io5";
import { headerData } from "@/data/dummyData";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LogoIcon from "@/components/logoIcon";
import CallBox from "@/components/callBox";

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {/* open */}
      <span className="p-4  w-full flex items-center justify-between ">
        <LogoIcon size={40} />
        <IoMenu
          onClick={() => setShowMenu(true)}
          className=" rounded-sm text-blue-800"
          size={40}
        />
      </span>

      <div className="relative ">
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
              <Button variant={"ghost"} className="text-3xl">
                {item.text}{" "}
              </Button>
            </li>
          ))}
          <span className="absolute bottom-8">
            <CallBox color="text-white" />
          </span>
        </ul>
      </div>
    </>
  );
};

export default MobileHeader;
