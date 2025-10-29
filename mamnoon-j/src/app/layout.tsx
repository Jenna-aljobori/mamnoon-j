import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ممنون - خدمة متكاملة لتوصيل الوقود والصيانة الذكية",
  description:
    "خدمة متكاملة لتوصيل الوقود والصيانة الذكية. نصل إليك أينما كنت بأفضل الخدمات وأسرع الأوقات.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased font-cairo`}>
        {children}
      </body>
    </html>
  );
}
