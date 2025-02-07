import Image from "next/image";
import { doingBusiness } from "@/data/doingbusiness";
const DoingBusiness = () => {
  return (
    <>
      <p className="text-blue-800 text-2xl  font-semibold w-full text-center pt-8">
        تجارت خود را پیش ببرید
      </p>

      <div className="grid sm:grid-cols-3  grid-cols-1 ">
        {doingBusiness?.map((item) => (
          <div
            className=" flex flex-col items-center justify-center "
            key={item.id}
          >
            <Image width={200} height={300} alt={item.text} src={item.image} />
            <p className="font-bold  cursor-pointer">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DoingBusiness;
