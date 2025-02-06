import FooterWeb from "@/components/layout/webLayout/footer";
import HeaderWeb from "@/components/layout/webLayout/header";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="container"><HeaderWeb/></header>
      <main className="container">{children}</main>
      <footer><FooterWeb/></footer>
    </div>
  );
}
