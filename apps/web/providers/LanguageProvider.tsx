'use client';

import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Detect language from browser
    const detectLanguage = () => {
      // Check localStorage first
      const savedLang = localStorage.getItem('i18nextLng');
      if (savedLang) {
        return savedLang;
      }
      
      // Check browser language
      const browserLang = navigator.language.split('-')[0];
      const supported = ['sv', 'en', 'fr', 'ar'];
      if (supported.includes(browserLang)) {
        return browserLang;
      }
      
      return 'sv'; // Default
    };

    const lang = detectLanguage();
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    
    // Set RTL for Arabic
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    
    localStorage.setItem('i18nextLng', lang);
    setIsInitialized(true);
  }, []);

  // Listen for language changes
  useEffect(() => {
    if (!isInitialized) return;

    const handleLanguageChanged = (lng: string) => {
      document.documentElement.lang = lng;
      if (lng === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
      localStorage.setItem('i18nextLng', lng);
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [isInitialized]);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}