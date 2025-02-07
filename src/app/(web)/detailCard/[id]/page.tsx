import DoingBusiness from "@/components/doingBusiness";
import { itemCardHomePage } from "@/data/cardItemInHomePage";
import ImageLogoForDetailCard from "./imageLogo";

export async function generateStaticParams() {
  return itemCardHomePage.map((item) => item.id);
}
const DetailCardItem = ({ params }: any) => {
  const { id } = params;
  const dataCard = itemCardHomePage.find((item) => item.id == id);
  return (
    <div className="  flex flex-col gap-8">
      <div className=" grid md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold md:text-3xl text-2xl">{dataCard?.text.textHeader}</h1>
          <p className="md:text-base/8 pr-4 text-2xl/10">{dataCard?.text?.textContent}</p>
        </div>
        <span className="flex h-screen md:h-auto justify-center items-center md:static text-blue-800 z-0 fixed  sm:opacity-100 opacity-10 ">
          <ImageLogoForDetailCard/>
        </span>
      </div>
      <p className="md:text-base/9 text-xl/10 md:p-0 pr-4">{dataCard?.text.textForDetailPage}</p>
      <div>
        <DoingBusiness />
      </div>
    </div>
  );
};

export default DetailCardItem;
