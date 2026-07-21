import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "المزين - صالون حلاقة رجالي فاخر",
  description: "صالون المزين للحلاقة الرجالية - أفضل خدمات الحلاقة والعناية بالرجال في العراق - الشطرة - الشعلة",
  keywords: "صالون حلاقة, حلاقة رجالي, المزين, الشطرة, العراق, حلاقة, لحية, عناية بالبشرة",
  openGraph: {
    title: "المزين - صالون حلاقة رجالي فاخر",
    description: "أفضل صالون حلاقة رجالي في العراق - الشطرة - الشعلة",
    type: "website",
    locale: "ar_IQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#111827]">{children}</body>
    </html>
  );
}

