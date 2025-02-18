import { AccordionAbutTemplate } from "@/template/web/about/accordionAbut";
import DesAboutTextTemplate from "@/template/web/about/desAbutText";
import HeroSectionTemplateAbutPage from "@/template/web/about/heroSectionAbut";

const AboutPageTemplate = () => {
  return (
    <div className="flex flex-col">
        <HeroSectionTemplateAbutPage />
        <DesAboutTextTemplate />
      <div className="md:flex justify-center sm:p-0 px-8">
        <AccordionAbutTemplate />
      </div>
    </div>
  );
};

export default AboutPageTemplate;
