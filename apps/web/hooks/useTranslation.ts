'use client';

import { useState, useEffect } from 'react';
import { getCurrentLanguage, t } from '@/lib/translations';

export function useTranslation(namespace: string = 'common') {
  const [lang, setLang] = useState('sv');

  useEffect(() => {
    setLang(getCurrentLanguage());
  }, []);

  const translate = (key: string) => {
    return t(lang, key, namespace);
  };

  return { t: translate, lang };
}