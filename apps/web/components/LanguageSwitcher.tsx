'use client';

import { useState, useEffect, useRef } from 'react';
import { languages, setLanguage, getCurrentLanguage } from '@/lib/translations';
import { ChevronDown, Check, Globe } from 'lucide-react';

// Define the Language type
interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const langCode = getCurrentLanguage();
    const lang = languages.find((l: Language) => l.code === langCode) || languages[0];
    setCurrentLang(lang);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLanguage = (lang: Language) => {
    setLanguage(lang.code);
    setCurrentLang(lang);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 text-white text-sm border border-blue-600 min-w-25"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4 text-yellow-400" />
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden md:inline font-medium text-white">
          {currentLang.nativeName}
        </span>
        <ChevronDown className={`h-4 w-4 text-yellow-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-xl bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-10 overflow-hidden z-50 border border-gray-200 dark:border-gray-700">
          <div className="py-1">
            {languages.map((lang: Language) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang)}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  lang.code === currentLang.code
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.nativeName}</span>
                {lang.code === currentLang.code && (
                  <Check className="ml-auto h-4 w-4 text-blue-600 dark:text-blue-400" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}