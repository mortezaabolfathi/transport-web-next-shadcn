import ImageHeroSection from "./imageHeroSection";

const HeroSection = () => {
  return (
    <div className="relative ">
      <ImageHeroSection />
      <div className="absolute top-0  w-full text-primary flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          به وب‌سایت ما خوش آمدید
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          بهترین تجربه را با ما داشته باشید
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
