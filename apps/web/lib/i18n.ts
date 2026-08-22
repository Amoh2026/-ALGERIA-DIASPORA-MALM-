import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Simple resources without language detector
const resources = {
  sv: {
    common: require('../public/locales/sv/common.json'),
    navigation: require('../public/locales/sv/navigation.json'),
  },
  en: {
    common: require('../public/locales/en/common.json'),
    navigation: require('../public/locales/en/navigation.json'),
  },
  fr: {
    common: require('../public/locales/fr/common.json'),
    navigation: require('../public/locales/fr/navigation.json'),
  },
  ar: {
    common: require('../public/locales/ar/common.json'),
    navigation: require('../public/locales/ar/navigation.json'),
  },
};

// Initialize i18next
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'sv',
      lng: 'sv',
      debug: false,
      ns: ['common', 'navigation'],
      defaultNS: 'common',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;