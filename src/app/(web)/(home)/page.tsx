import HeroSection from "@/template/web/home/heroSection";
import Image from "next/image";
import ImageSection from "@/public/assets/image/customs_officer_2.jpg"
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="grid grid-cols-2 mt-8">
        <div className="flex flex-col gap-8 justify-center">
          <h2 className="text-3xl font-bold "> ترخیص کالا از صفر تا صد، از اسناد تا تحویل درب انبار</h2>
          <p className="pr-4">
            از دریافت اسناد تا ترخیص نهایی کالا، تمامی مراحل گمرکی را با دقت و
            شفافیت انجام می‌دهیم. ما موانع اداری را برطرف کرده و روند ترخیص را
            سریع و بدون دردسر می‌کنیم. تیم ما با بررسی دقیق قوانین گمرکی و ارائه
            راهکارهای بهینه، زمان انتظار را به حداقل رسانده و از بروز مشکلات
            احتمالی جلوگیری می‌کند. هدف ما ارائه خدماتی است که فرآیند ترخیص کالا
            را برای مشتریان آسان‌تر و بی‌دغدغه‌تر کند.
          </p>
        </div>
        <div className="flex justify-center items-center">
        <Image src={ImageSection} alt="" className="rounded-xl" width={400} />

        </div>
      </div>
      <div>asd'as;dl;aas</div>
      <div>asd'as;dl;aas</div>
      <div>asd'as;dl;aas</div>
      <div>asd'as;dl;aas</div>
      <div>asd'as;dl;aas</div>
      <div>asd'as;dl;aas</div>
      <div>asd'as;dl;aas</div>
      <div>asd'as;dl;aas</div>
    </>
  );
};

export default HomePage;
