import CardItemInPage from "@/components/cardItemInPage";
import ImageOne from "@/public/assets/image/customs_officer_2.jpg";
import ImageTow from "@/public/assets/image/59858.jpg";
import ImageThree from "@/public/assets/image/6226335.jpg";
import ImageFor from "@/public/assets/image/20945971.jpg";
import ImageFive from "@/public/assets/image/supply_16.jpg";
import ship from "@/public/assets/image/ship.png";
import airplane from "@/public/assets/image/airplane.png";
import tower from "@/public/assets/image/tower.png";
import styleAnimation from "@/style/animation.module.css";
import styleGlobal from "@/style/global.module.css";
import Image from "next/image";
import { itemCardHomePage } from "@/data/cardItemInHomePage";

const OneSection = () => {
  const dataJobs = [
    {
      text: "ترخیص کالای دریایی",
      image: ship,
      id: 1,
    },
    {
      text: "ترخیص کالای هوایی",
      image: airplane,
      id: 1,
    },
    {
      text: "ترخیص کالای زمینی",
      image: tower,
      id: 1,
    },
  ];
  return (
    <div className={`flex flex-col  ${styleGlobal.homePage}`}>
      {itemCardHomePage.map((item) => {
        return (
          <span key={item.id}>
            <CardItemInPage
              imageBox={item.image}
              text={item.text}
              boxColor={item.boxColor}
              buttonItem={item.buttonItem}
              rowRevers={item.rowRevers}
            />
          </span>
        );
      })}
      <div className="flex flex-col gap-6 justify-center ">
        <div className="w-full flex items-centert">
          <p className="text-blue-300 text-xl mx-4">تجارت خود را پیش ببرید</p>
        </div>
        <div className="grid grid-cols-3  ">
          {dataJobs?.map((item) => (
            <div
              className=" flex flex-col items-center justify-center "
              key={item.id}
            >
              <Image
                width={200}
                height={300}
                alt={item.text}
                src={item.image}
              />
              <p className="font-bold  cursor-pointer">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OneSection;
