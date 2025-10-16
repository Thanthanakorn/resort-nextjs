import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "บ้านเกื้อบ่อกุ้ง รีสอร์ต | ที่พักท่ามกลางธรรมชาติ",
  description: "ที่พักท่ามกลางสวนธรรมชาติ บรรยากาศร่มรื่น เงียบสงบ เหมาะสำหรับการพักผ่อน ใกล้แหล่งท่องเที่ยวสำคัญ บริการดีเยี่ยม ราคาเป็นมิตร",
  keywords: "รีสอร์ต, ที่พัก, ธรรมชาติ, พักผ่อน, บ้านเกื้อบ่อกุ้ง",
  authors: [{ name: "บ้านเกื้อบ่อกุ้ง รีสอร์ต" }],
  creator: "บ้านเกื้อบ่อกุ้ง รีสอร์ต",
  openGraph: {
    title: "บ้านเกื้อบ่อกุ้ง รีสอร์ต",
    description: "ที่พักท่ามกลางสวนธรรมชาติ บรรยากาศร่มรื่น เงียบสงบ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
