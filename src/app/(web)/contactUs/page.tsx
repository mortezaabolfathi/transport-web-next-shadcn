import Loading from "@/app/loading";
import dynamic from "next/dynamic";
const ContactUsTemplate = dynamic(() => import("@/template/web/contactUs"), {
  loading: () => <Loading />,
});

const ContactUs = () => {
  return <ContactUsTemplate />;
};

export default ContactUs;
