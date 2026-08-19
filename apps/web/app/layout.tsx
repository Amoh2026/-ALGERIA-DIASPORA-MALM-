import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TopBanner } from "@/components/TopBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Svensk Algeriska Föreningen",
  description: "Svensk Algeriska Föreningen - Förenar Sverige och Algeriet sedan 1975",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <TopBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}