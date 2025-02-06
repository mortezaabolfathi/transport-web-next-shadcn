import ImageCompany from "@/public/assets/image/heroImage.webp";
import style from "@/style/animation.module.css";
import Image from "next/image";
const HeroSectionHomePage = () => {
  return (
    <div className="relative  ">
      <div className={`${style.openInToOut}`}>
        <Image
          src={ImageCompany}
          alt="Hero"
          className="w-full object-cover rounded-xl"
        />
      </div>
      <div className="md:absolute top-0  w-full text-primary md:flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          به وب‌سایت ما خوش آمدید
        </h1>
       <p className="text-2xl text-center bg-">
       بهترین تجربه را با ما داشته باشید
       </p>
      </div>
    </div>
  );
};

export default HeroSectionHomePage;
