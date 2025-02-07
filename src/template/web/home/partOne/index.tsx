import CardItemInPage from "@/components/cardItemInPage";
import DoingBusiness from "@/components/doingBusiness";
import { itemCardHomePage } from "@/data/cardItemInHomePage";

import styleGlobal from "@/style/global.module.css";

const OneSection = () => {
 
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
      
       <DoingBusiness/>
   
    </div>
  );
};

export default OneSection;
