import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CardWithForm() {
  return (
    <Card className=" mt-8">
      <CardHeader>
        <CardTitle>درخواست مشاوره</CardTitle>
        <CardDescription>
          برای درخواست مشاوره با گروه بازرگانی یاراد لطفا فرم زیر را پر کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="w-full ">
          <div className="grid w-full items-center gap-4">
            <>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phoneNumber">شماره تماس</Label>
                <Input
                  id="phoneNumber"
                  placeholder="0912123456"

                />
              </div>
              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="name">نام و نام‌خانوادگی</Label>
                <Input id="name" placeholder="نام و نام خانوادگی" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">ایمیل</Label>
                <Input id="email" placeholder=" email@..." />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">موضوع مشاوره </Label>
                <Input id="des" placeholder="موضوع..." />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email"> توضیحات</Label>
                <Textarea placeholder="توضیحات..." />
              </div>
            </>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>ارسال</Button>
      </CardFooter>
    </Card>
  );
}
