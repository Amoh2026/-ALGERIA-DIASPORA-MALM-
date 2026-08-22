import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBanner } from "@/components/TopBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/providers/LanguageProvider"; // ✅ Add this!
import { LanguageSwitcherWrapper } from "@/components/LanguageSwitcherWrapper"; // ✅ Add this!

const inter = Inter({ subsets: ["latin"] });

// ✅ Update metadata for multilingual SEO
export const metadata: Metadata = {
  title: {
    template: '%s | Svensk Algeriska Föreningen',
    default: "Svensk Algeriska Föreningen",
  },
  description: "Förenar Sverige och Algeriet sedan 1975 - Algerian Swedish Association in Malmö",
  alternates: {
    languages: {
      'sv': '/sv',
      'en': '/en',
      'fr': '/fr',
      'ar': '/ar',
    },
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: { locale?: string };
}>) {
  // Get locale from params or default to 'sv'
  const locale = params?.locale || 'sv';

  return (
    <html lang={locale}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* ✅ Wrap everything in AuthProvider and LanguageProvider */}
        <AuthProvider>
          <LanguageProvider>
            <TopBanner />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}