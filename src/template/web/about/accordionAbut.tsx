import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionAbutTemplate() {
  const data = [
    {
      id: 1,
      title: "شماره تماس",
      text: "09144040525",
    },
    {
      id: 2,
      title: "آدرس",
      text: ` منطقه آزاد ماکو بازرگان خیابان امام روبروی قرنطینه جهاد کشاورزی
          بازرگانی یاراد`,
    },
    {
      id: 3,
      title: "ایمیل",
      text: "info@yaradco.com",
    },
  ];
  return (
    <div className="md:w-1/2">
      <Accordion type="single" collapsible className="w-full">
        {data?.map((item) => {
          return (
            <AccordionItem value={`item-${item.id}`}>
              <AccordionTrigger className="font-bold text-xl">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-lg">{item.text}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
