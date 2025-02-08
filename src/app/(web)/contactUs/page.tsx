import DoingBusiness from "@/components/doingBusiness";
import TextContactUs from "@/template/web/contactUs/textContactUs";
import { CardWithForm } from "@/template/web/servicePage/formConactUs";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <DoingBusiness />
      <TextContactUs />
      <CardWithForm/>
    </>
  );
};

export default ContactUs;
