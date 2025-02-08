import dynamic from "next/dynamic";
import Loading from "@/app/loading";
const ServicesTemplate = dynamic(() => import("@/template/web/servicePage"), {
  loading: () => <Loading />,
});

const ServicesPage = () => {
  return <ServicesTemplate />;
};

export default ServicesPage;
