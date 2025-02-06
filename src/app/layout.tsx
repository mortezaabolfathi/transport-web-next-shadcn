import "./globals.css";
import type { Metadata } from "next";
import { iranSans } from "@/utils/font";

export const metadata: Metadata = {
  title: "transport",
  description: "transport in IRAN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${iranSans.className} antialiased  overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
