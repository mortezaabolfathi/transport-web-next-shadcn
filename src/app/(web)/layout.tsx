import FooterWeb from "@/components/layout/webLayout/footer";
import HeaderWeb from "@/components/layout/webLayout/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div>
          <span className="bg-red-400">header </span>
          {children}

      </div>
    
    
  );
}