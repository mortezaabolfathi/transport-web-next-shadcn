import { headerData } from "@/data/dummyData";
import React from "react";
import LogoIcon from "@/components/logoIcon";
import CallBox from "@/components/callBox";

const DesktopHeader = () => {
  return (
    <nav className="relative z-10 ">
      <ul className="hidden md:flex flex-row items-center justify-center bg-background rounded-xl p-1 bg-red-800">
        {headerData.map((item) => (
          <li key={item.id}>
            <button>{item.text}</button>
          </li>
        ))}
        <p className="flex flex-row gap-2 items-center absolute left-8">
            <CallBox/>
        </p>
        <p className="flex flex-row gap-2 items-center absolute right-8">
          <LogoIcon/>
        </p>
      </ul>
    </nav>
  );
};

export default DesktopHeader;
