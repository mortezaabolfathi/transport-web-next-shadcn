import dynamic from "next/dynamic";
const ContactUsTemplate = dynamic(() => import("@/template/web/contactUs"));

const ContactUs = () => {
  return <ContactUsTemplate />;
};

export default ContactUs;
