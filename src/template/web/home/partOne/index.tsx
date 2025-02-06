import CardItemInPage from "@/components/cardItemInPage";
import ImageSection from "@/public/assets/image/customs_officer_2.jpg";
import style from "@/style/animation.module.css";
import Image from "next/image";

const OneSection = () => {
  return (
    <CardItemInPage
      // image={ImageSection}
      text={{
        textContent:
          "شرکت ما با سال‌ها تجربه و تخصص در زمینه ترخیص کالا، تمامی مراحل گمرکی را با دقت و سرعت بالا انجام می‌دهد. ما تضمین می‌کنیم که کالاهای شما بدون مشکل و در کمترین زمان ممکن از گمرک ترخیص شوند. تیم ما با آشنایی کامل به قوانین و مقررات بین‌المللی و داخلی، فرآیندهای ترخیص را ساده‌تر کرده و از هرگونه تأخیر و هزینه‌های اضافی جلوگیری می‌کند. هدف ما ارائه خدماتی ایمن، سریع و مقرون‌به‌صرفه برای واردکنندگان و صادرکنندگان است.",
        textHeader: "ترخیص کالا بدون دردسر، سریع، مطمئن و تخصصی",
      }}
      imageBox={<Image src={ImageSection} alt="image-ship" className={` ${style.circle}`} width={300} />}
      buttonItem={{
        textButton:"مطالعه بیشتر درباره  ترخیص کالا...",
        link:"/"
      }}
    />
  );
};

export default OneSection;
