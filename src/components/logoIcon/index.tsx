import Link from "next/link";
import React from "react";
import { IoLogoFirebase } from "react-icons/io5";
const LogoIcon = ({ size = 20 }) => {
  return (
    <Link href={"/"}>
      <IoLogoFirebase  size={size} className="hover:shadow-md cursor-pointer" />
    </Link>
  );
};

export default LogoIcon;
