import ImageOne from "@/public/assets/image/customs_officer_2.jpg";
import ImageTow from "@/public/assets/image/59858.jpg";
import ImageThree from "@/public/assets/image/6226335.jpg";
import ImageFor from "@/public/assets/image/20945971.jpg";
import ImageFive from "@/public/assets/image/supply_16.jpg";
import Image from "next/image";
import styleAnimation from "@/style/animation.module.css";

export const itemCardHomePage = [
  {
    id: 1,
    text: {
      textContent:
        "شرکت ما با سال‌ها تجربه و تخصص در زمینه ترخیص کالا، تمامی مراحل گمرکی را با دقت و سرعت بالا انجام می‌دهد. ما تضمین می‌کنیم که کالاهای شما بدون مشکل و در کمترین زمان ممکن از گمرک ترخیص شوند. تیم ما با آشنایی کامل به قوانین و مقررات بین‌المللی و داخلی، فرآیندهای ترخیص را ساده‌تر کرده و از هرگونه تأخیر و هزینه‌های اضافی جلوگیری می‌کند. هدف ما ارائه خدماتی ایمن، سریع و مقرون‌به‌صرفه برای واردکنندگان و صادرکنندگان است.",
      textHeader: "ترخیص کالا بدون دردسر، سریع، مطمئن و تخصصی",
    },
    image: (
      <Image
        src={ImageOne}
        alt="image-ship"
        className={` ${styleAnimation.circle}`}
        width={300}
      />
    ),
    buttonItem: {
      textButton: "مطالعه بیشتر درباره  ترخیص کالا...",
      link: "/",
    },
     rowRevers:false,
     boxColor:"bg-white",
  },
  {
    id: 2,
    text: {
        textContent:
          "بازرگانی یاراد با تیمی متخصص و آشنا به قوانین گمرکی، خدمات جامع در حوزه واردات و صادرات ارائه می‌دهد. ما همراه شما هستیم تا تجارت بین‌المللی را آسان‌تر و کم‌ریسک‌تر کنید. از تهیه اسناد گمرکی تا حمل و نقل بین‌المللی، تمامی مراحل تجاری را به‌صورت حرفه‌ای مدیریت می‌کنیم. همکاری با شبکه گسترده‌ای از شرکای تجاری در سراسر جهان، امکان ارائه بهترین راهکارها برای کاهش هزینه‌ها و افزایش سرعت را برای شما فراهم کرده است.",
        textHeader: " بازرگانی یاراد، همراه مطمئن شما در تجارت بین‌الملل",
      },
    image: (
        <Image
        src={ImageTow}
        alt="image-ship"
        className={`${styleAnimation.circle}`}
        width={300}
      />
    ),
    buttonItem: {
        textButton: "مطالعه بیشتر درباره بازرگانی یارد...",
        link: "/",
      },
     rowRevers:true,
     boxColor:"bg-none",
  },
  {
    id: 3,
    text: {
        textContent:
          "از دریافت اسناد تا ترخیص نهایی کالا، تمامی مراحل گمرکی را با دقت و شفافیت انجام می‌دهیم. ما موانع اداری را برطرف کرده و روند ترخیص را سریع و بدون دردسر می‌کنیم. تیم ما با بررسی دقیق قوانین گمرکی و ارائه راهکارهای بهینه، زمان انتظار را به حداقل رسانده و از بروز مشکلات احتمالی جلوگیری می‌کند. هدف ما ارائه خدماتی است که فرآیند ترخیص کالا را برای مشتریان آسان‌تر و بی‌دغدغه‌تر کند.",
        textHeader: "صفر تا صد ترخیص",
      },
    image: (
        <Image
        src={ImageThree}
        alt="image-ship"
        className={` ${styleAnimation.circle}`}
        width={300}
      />
    ),
    buttonItem:{
        textButton: "مطالعه بیشتر درباره  ترخیص کالا...",
        link: "/",
      },
     rowRevers:false,
     boxColor:"bg-white",
  },
  {
    id: 4,
    text: {
        textContent:
          "ما حمل و نقل بین‌المللی را از مبدا تا گمرک ایران با بهترین شرایط و هزینه انجام می‌دهیم. امنیت، سرعت و دقت در ارسال کالا، اولویت اصلی ماست. با استفاده از روش‌های حمل‌ونقل هوایی، زمینی و دریایی، متناسب با نوع کالا و نیاز مشتری، بهترین مسیر را انتخاب کرده و اطمینان حاصل می‌کنیم که بار شما در کمترین زمان و با هزینه مناسب به مقصد برسد.",
        textHeader: "حمل از مبدا به گمرک ایران",
      },
    image: (
        <Image
            src={ImageFor}
            alt="image-ship"
            className={`rounded-full ${styleAnimation.circle}`}
            width={300}
          />
    ),
    buttonItem: {
        textButton: "مطالعه بیشتر درباره حمل از مبدا...",
        link: "/",
      },
     rowRevers:true,
     boxColor:"bg-none",
  },
  {
    id: 5,
    text: {
        textContent:
          "با تخصص در فرآیندهای اداری، ثبت سفارش کالاهای وارداتی را در کوتاه‌ترین زمان ممکن انجام می‌دهیم. ما اطمینان حاصل می‌کنیم که تمامی مراحل قانونی به‌درستی طی شود. آگاهی از تغییرات قوانین و مقررات ثبت سفارش به ما کمک می‌کند تا روند اخذ مجوزها را بدون مشکل پیش ببریم و از تأخیرهای احتمالی جلوگیری کنیم.",

        textHeader:
          "ثبت سفارش بدون دردسر، اخذ مجوزهای قانونی در کوتاه‌ترین زمان",
      },
    image: (
        <Image
        src={ImageFive}
        alt="image-ship"
        className={` ${styleAnimation.circle}`}
        width={300}
      />
    ),
    buttonItem:{
        textButton: "مطالعه بیشتر درباره مجوزهای قانونی...",
        link: "/",
      },
     rowRevers:false,
     boxColor:"bg-white",
  },
];
