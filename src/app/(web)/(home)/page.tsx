import DoingBusiness from "@/components/doingBusiness";
import CardsItem from "@/template/web/home/cardItem";
import Carousel from "@/template/web/home/carusel";
import TitleHomePageTemplate from "@/template/web/home/titile";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Carousel />
      <TitleHomePageTemplate />
      <CardsItem />
      <DoingBusiness />
    </div>
  );
};

export default HomePage;
