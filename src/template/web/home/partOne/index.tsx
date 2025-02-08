import CardItemInPage from "@/components/cardItemInPage";
import DoingBusiness from "@/components/doingBusiness";
import { itemCardHomePage } from "@/data/cardItemInHomePage";

import styleGlobal from "@/style/global.module.css";

const OneSection = () => {
 
  return (
    <div className={`flex flex-col  `}>
      <h1 className="text-4xl font-semibold text-center pt-8 text-blue-700 ">
        گروه بازرگانی یاراد متخصص در ارائه خدمات ترخیص کالا
      </h1>
      {itemCardHomePage.map((item) => {
        return (
          <span key={item.id}>
            <CardItemInPage
              imageBox={item.image}
              text={item.text}
              boxColor={item.boxColor}
              buttonItem={{
                textButton:item.buttonItem.textButton,
              }}
              linkUrl={`/detailCard/${item.id}?dis=${item.text.textHeader}`}
              rowRevers={item.rowRevers}
            />
          </span>
        );
      })}
      
       <DoingBusiness/>
   
    </div>
  );
};

export default OneSection;
