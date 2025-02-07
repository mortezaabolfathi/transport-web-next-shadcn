
"use client"
import LogoIcon from "@/components/logoIcon";
import useResponsive from "@/hook/useResponsive";

const ImageLogoForDetailCard = () => {
    const {isMobile} = useResponsive()
  return ( <LogoIcon size={
    isMobile ? 380 : 200
  } />)
}

export default ImageLogoForDetailCard