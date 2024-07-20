import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";

const Vazir = Vazirmatn({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "IraniGram",
  description: "Persian Socialmedia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="fa" dir="rtl">
        <body className={Vazir.className}>
          <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <NavBar />
          </div>
          <div className="w-full bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
