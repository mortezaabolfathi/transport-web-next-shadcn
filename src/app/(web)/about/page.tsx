import Loading from "@/app/loading";
import dynamic from "next/dynamic";
const AboutPageTemplate = dynamic(() => import("@/template/web/about"), {
  loading:()=><Loading/>
});

const AboutPage = () => {
  return <AboutPageTemplate />;
};

export default AboutPage;
