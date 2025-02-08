"use client";
import { Button } from "@/components/ui/button";
import { CarouselData } from "@/data/carousel";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className = "") {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
      //   return `<span className='bg-red-40'>' + (index + 1) + '</span>`;
    },
  };

  return (
    <div className="h-96">
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        loop
        autoplay
        className="mySwiper rounded-xl"
      >
        {CarouselData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="flex sm:flex-row flex-col bg-gray-800">
                <div className=" sm:w-1/2 flex flex-col items-center gap-4  ">
                  <p className="font-bold text-2xl h-[100px] text-center pt-8 text-blue-700">
                    {item.title}
                  </p>
                  <p className="md:w-3/4 text-start text-white hidden sm:block">
                    {item.des?.substring(0, 150) + "..."}
                  </p>
                  <Link href={"/servicePage"} className="w-full text-end ">
                    <Button variant={"link"} className="text-blue-700">مطاله بیشتر...</Button>
                  </Link>
                </div>
                <div className=" sm:w-1/2 flex justify-center items-center">
                  <Image className="" alt={item.title} src={item.image} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
