"use client";
import { motion } from "framer-motion";
import ImageCompany from "@/public/assets/image/heroImage.webp";
import Image from "next/image";
const ImageHeroSection = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeInOut" }}
        className="inset-0 w-full "
      >
        <Image
          src={ImageCompany}
          alt="Hero"
          className="w-full  object-cover rounded-xl"
        />
      </motion.div>
    </>
  );
};

export default ImageHeroSection;
