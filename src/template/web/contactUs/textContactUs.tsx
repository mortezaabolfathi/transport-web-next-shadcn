const TextContactUs = () => {
  return (
    <div className="flex flex-col gap-8 bg-white p-8 mt-8 rounded-xl">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">تماس با بازرگانی یاراد :</h1>
        <p className="text-xl ">09144040525</p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">آدرس :</h1>
        <p className="text-xl">
          منطقه آزاد ماکو بازرگان خیابان امام روبروی قرنطینه جهاد کشاورزی
          بازرگانی یاراد
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">ایمیل :</h1>
        <p className="text-xl">info@yaradco.com</p>
      </div>
    </div>
  );
};

export default TextContactUs;
