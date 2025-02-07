import { AccordionAbutTemplate } from "@/template/web/about/accordionAbut";
import DesAboutTextTemplate from "@/template/web/about/desAbutText";
import HeroSectionTemplateAbutPage from "@/template/web/about/heroSectionAbut";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <div className="h-screen">
        <HeroSectionTemplateAbutPage />
      </div>
      <div>
        <DesAboutTextTemplate />
      </div>
      <div>
        <AccordionAbutTemplate />
      </div>
    </div>
  );
};

export default AboutPage;
