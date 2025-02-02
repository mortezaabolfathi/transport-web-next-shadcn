import HeaderWeb from "@/components/layout/webLayout/header";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header><HeaderWeb/></header>
      <main>{children}</main>
      <footer>📌 فوتر اختصاصی برای صفحات `web`</footer>
    </div>
  );
}
