import CardItemInPage from "@/components/cardItemInPage";
import { itemCardHomePage } from "@/data/cardItemInHomePage";

const CardsItem = () => {
  return (
    <>
      {itemCardHomePage.map((item) => {
        return (
          <span key={item.id}>
            <CardItemInPage
              imageBox={item.image}
              text={item.text}
              boxColor={item.boxColor}
              buttonItem={{
                textButton: item.buttonItem.textButton,
              }}
              linkUrl={`/detailCard/${item.id}?dis=${item.text.textHeader}`}
              rowRevers={item.rowRevers}
            />
          </span>
        );
      })}
    </>
  );
};

export default CardsItem;
