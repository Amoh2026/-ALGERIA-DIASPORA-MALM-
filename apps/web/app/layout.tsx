import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBanner } from "@/components/TopBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext"; // ✅ Add this!

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Svensk Algeriska Föreningen",
  description: "Förenar Sverige och Algeriet sedan 1975",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* ✅ Wrap everything in AuthProvider so Navbar works */}
        <AuthProvider>
          <TopBanner />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}