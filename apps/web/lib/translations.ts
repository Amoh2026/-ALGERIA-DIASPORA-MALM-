// Simple translation system - No external dependencies needed!

type TranslationKey = string;
type TranslationValue = string;
type TranslationNamespace = Record<TranslationKey, TranslationValue>;

interface Translations {
  [language: string]: {
    [namespace: string]: TranslationNamespace;
  };
}

// All translations
const translations: Translations = {
  sv: {
    home: {
  home: "Hem",
  about: "Om Oss",
  events: "Evenemang",
  culture: "Kultur",
  contact: "Kontakt",
  heroTitle: "Välkommen till Svensk Algeriska Föreningen i Malmö",
  heroSubtitle: "🌉 Malmö — En stad av broar och kulturer",
  heroDescription: "Malmö är en av Sveriges mest vibrerande och mångsidiga städer, belägen i södra Skåne. Med sin rika historia, moderna arkitektur och vackra kustlinje har Malmö blivit ett hem för människor från hela världen — inklusive en blomstrande algerisk gemenskap.",
  discoverMalmo: "🏙️ Upptäck Malmö",
  turningTorso: "Turning Torso",
  turningTorsoDesc: "Malmös mest ikoniska landmärke i Västra Hamnen.",
  stortorget: "Stortorget",
  stortorgetDesc: "Malmös äldsta och vackraste torg.",
  ribersborg: "Ribersborg Beach",
  ribersborgDesc: "'Ribban' - populär strand längs Öresund.",
  associationTitle: "🇩🇿 Svensk Algeriska Föreningen i Malmö",
  associationSubtitle: "En aktiv mötesplats för algerier i Malmö",
  associationIntro: "Svensk-Algeriska Föreningen i Malmö (SAF) är en aktiv förening som samlar algerier och personer med anknytning till Algeriet som bor i Malmö och närområdet.",
  associationWork: "Föreningen arbetar för att skapa gemenskap, främja det kulturella utbytet och ge medlemmarna möjlighet att mötas, samarbeta och delta i olika aktiviteter i Malmö.",
  associationPartners: "Föreningen är en del av det lokala föreningslivet och deltar i olika aktiviteter tillsammans med andra föreningar och organisationer i Malmö, bland annat ABF och andra lokala samarbetspartners.",
  ourActivities: "💫 Vår Verksamhet",
  embassy: "Kontakt med Ambassaden",
  embassyDesc: "Nära samarbete med Algeriets ambassad i Stockholm.",
  embassyLink: "Besök hemsidan →",
  network: "Internationellt Nätverk",
  networkDesc: "Samarbete med algeriska föreningar i Skandinavien och Europa.",
  youth: "Ungdomsgrupp",
  youthDesc: "Aktiv tonårsgrupp som organiserar evenemang.",
  local: "Lokalt Samarbete",
  localDesc: "Aktivt deltagande i ABF och andra lokala organisationer.",
  callToAction: "🌟 Bli en del av SAF",
  callToActionDesc: "Svensk-Algeriska Föreningen i Malmö – gemenskap, kultur och samarbete.",
  joinNow: "Bli Medlem idag",
  contactUs: "Kontakta oss",
  footerTagline: "Svensk-Algeriska Föreningen i Malmö – gemenskap, kultur och samarbete.",
  footerCopyright: "Svensk Algeriska Föreningen. Alla rättigheter förbehållna."
},
    common: {
      loading: "Laddar...",
      error: "Något gick fel",
      success: "Lyckades!",
      save: "Spara",
      cancel: "Avbryt",
      delete: "Ta bort",
      edit: "Redigera",
      view: "Visa",
      back: "Tillbaka",
      search: "Sök...",
      noResults: "Inga resultat hittades",
      readMore: "Läs mer",
      showMore: "Visa mer",
      showLess: "Visa mindre"
    },
    navigation: {
      home: "Hem",
      about: "Om Oss",
      events: "Evenemang",
      culture: "Kultur",
      contact: "Kontakt",
      login: "Logga in",
      register: "Registrera",
      dashboard: "Dashboard",
      membership: "Bli Medlem",
      admin: "Admin",
      logout: "Logga ut",
      language: "Språk",
      loggedInAs: "Inloggad som:",
      adminDashboard: "Admin Dashboard"
    }
  },
  en: {
    home: {
  home: "Home",
  about: "About Us",
  events: "Events",
  culture: "Culture",
  contact: "Contact",
  heroTitle: "Welcome to the Swedish Algerian Association in Malmö",
  heroSubtitle: "🌉 Malmö — A City of Bridges and Cultures",
  heroDescription: "Malmö is one of Sweden's most vibrant and diverse cities, located in southern Skåne. With its rich history, modern architecture, and beautiful coastline, Malmö has become a home for people from all over the world — including a thriving Algerian community.",
  discoverMalmo: "🏙️ Discover Malmö",
  turningTorso: "Turning Torso",
  turningTorsoDesc: "Malmö's most iconic landmark in Västra Hamnen.",
  stortorget: "Stortorget",
  stortorgetDesc: "Malmö's oldest and most beautiful square.",
  ribersborg: "Ribersborg Beach",
  ribersborgDesc: "'Ribban' - popular beach along the Öresund.",
  associationTitle: "🇩🇿 Swedish Algerian Association in Malmö",
  associationSubtitle: "An active meeting place for Algerians in Malmö",
  associationIntro: "The Swedish-Algerian Association in Malmö (SAF) is an active association that brings together Algerians and people with connections to Algeria living in Malmö and the surrounding area.",
  associationWork: "The association works to create community, promote cultural exchange, and give members the opportunity to meet, collaborate, and participate in various activities in Malmö.",
  associationPartners: "The association is part of the local association life and participates in various activities together with other associations and organizations in Malmö, including ABF and other local partners.",
  ourActivities: "💫 Our Activities",
  embassy: "Contact with the Embassy",
  embassyDesc: "Close cooperation with the Algerian Embassy in Stockholm.",
  embassyLink: "Visit website →",
  network: "International Network",
  networkDesc: "Collaboration with Algerian associations in Scandinavia and Europe.",
  youth: "Youth Group",
  youthDesc: "Active teenage group organizing events.",
  local: "Local Collaboration",
  localDesc: "Active participation in ABF and other local organizations.",
  callToAction: "🌟 Become part of SAF",
  callToActionDesc: "Swedish-Algerian Association in Malmö – community, culture, and collaboration.",
  joinNow: "Join Now",
  contactUs: "Contact Us",
  footerTagline: "Swedish-Algerian Association in Malmö – community, culture, and collaboration.",
  footerCopyright: "Swedish Algerian Association. All rights reserved."
},
    common: {
      loading: "Loading...",
      error: "Something went wrong",
      success: "Success!",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      view: "View",
      back: "Back",
      search: "Search...",
      noResults: "No results found",
      readMore: "Read more",
      showMore: "Show more",
      showLess: "Show less"
    },
    navigation: {
      home: "Home",
      about: "About Us",
      events: "Events",
      culture: "Culture",
      contact: "Contact",
      login: "Login",
      register: "Register",
      dashboard: "Dashboard",
      membership: "Membership",
      admin: "Admin",
      logout: "Logout",
      language: "Language",
      loggedInAs: "Logged in as:",
      adminDashboard: "Admin Dashboard"
    }
  },
  fr: {
    home: {
  home: "Accueil",
  about: "À Propos",
  events: "Événements",
  culture: "Culture",
  contact: "Contact",
  heroTitle: "Bienvenue à l'Association Algérienne Suédoise à Malmö",
  heroSubtitle: "🌉 Malmö — Une ville de ponts et de cultures",
  heroDescription: "Malmö est l'une des villes les plus dynamiques et diversifiées de Suède, située dans le sud de la Scanie. Avec son histoire riche, son architecture moderne et sa belle côte, Malmö est devenue un foyer pour des personnes du monde entier — y compris une communauté algérienne florissante.",
  discoverMalmo: "🏙️ Découvrez Malmö",
  turningTorso: "Turning Torso",
  turningTorsoDesc: "Le monument le plus emblématique de Malmö à Västra Hamnen.",
  stortorget: "Stortorget",
  stortorgetDesc: "La plus ancienne et la plus belle place de Malmö.",
  ribersborg: "Plage de Ribersborg",
  ribersborgDesc: "'Ribban' - plage populaire le long de l'Öresund.",
  associationTitle: "🇩🇿 Association Algérienne Suédoise à Malmö",
  associationSubtitle: "Un lieu de rencontre actif pour les Algériens à Malmö",
  associationIntro: "L'Association Algéro-Suédoise à Malmö (SAF) est une association active qui rassemble les Algériens et les personnes ayant des liens avec l'Algérie vivant à Malmö et dans ses environs.",
  associationWork: "L'association travaille à créer une communauté, à promouvoir les échanges culturels et à donner aux membres l'opportunité de se rencontrer, de collaborer et de participer à diverses activités à Malmö.",
  associationPartners: "L'association fait partie de la vie associative locale et participe à diverses activités avec d'autres associations et organisations à Malmö, y compris ABF et d'autres partenaires locaux.",
  ourActivities: "💫 Nos Activités",
  embassy: "Contact avec l'Ambassade",
  embassyDesc: "Coopération étroite avec l'Ambassade d'Algérie à Stockholm.",
  embassyLink: "Visiter le site web →",
  network: "Réseau International",
  networkDesc: "Collaboration avec les associations algériennes en Scandinavie et en Europe.",
  youth: "Groupe de Jeunes",
  youthDesc: "Groupe d'adolescents actif organisant des événements.",
  local: "Collaboration Locale",
  localDesc: "Participation active à ABF et à d'autres organisations locales.",
  callToAction: "🌟 Faites partie de SAF",
  callToActionDesc: "Association Algéro-Suédoise à Malmö – communauté, culture et collaboration.",
  joinNow: "Adhérer Maintenant",
  contactUs: "Contactez-nous",
  footerTagline: "Association Algéro-Suédoise à Malmö – communauté, culture et collaboration.",
  footerCopyright: "Association Algérienne Suédoise. Tous droits réservés."
},
    common: {
      loading: "Chargement...",
      error: "Une erreur s'est produite",
      success: "Succès !",
      save: "Enregistrer",
      cancel: "Annuler",
      delete: "Supprimer",
      edit: "Modifier",
      view: "Voir",
      back: "Retour",
      search: "Rechercher...",
      noResults: "Aucun résultat trouvé",
      readMore: "Lire la suite",
      showMore: "Voir plus",
      showLess: "Voir moins"
    },
    navigation: {
      home: "Accueil",
      about: "À Propos",
      events: "Événements",
      culture: "Culture",
      contact: "Contact",
      login: "Connexion",
      register: "S'inscrire",
      dashboard: "Tableau de bord",
      membership: "Adhésion",
      admin: "Admin",
      logout: "Déconnexion",
      language: "Langue",
      loggedInAs: "Connecté en tant que:",
      adminDashboard: "Tableau de bord Admin"
    }
  },
  ar: {
    home: {
  home: "Accueil",
  about: "À Propos",
  events: "Événements",
  culture: "Culture",
  contact: "Contact",
  heroTitle: "Bienvenue à l'Association Algérienne Suédoise à Malmö",
  heroSubtitle: "🌉 Malmö — Une ville de ponts et de cultures",
  heroDescription: "Malmö est l'une des villes les plus dynamiques et diversifiées de Suède, située dans le sud de la Scanie. Avec son histoire riche, son architecture moderne et sa belle côte, Malmö est devenue un foyer pour des personnes du monde entier — y compris une communauté algérienne florissante.",
  discoverMalmo: "🏙️ Découvrez Malmö",
  turningTorso: "Turning Torso",
  turningTorsoDesc: "Le monument le plus emblématique de Malmö à Västra Hamnen.",
  stortorget: "Stortorget",
  stortorgetDesc: "La plus ancienne et la plus belle place de Malmö.",
  ribersborg: "Plage de Ribersborg",
  ribersborgDesc: "'Ribban' - plage populaire le long de l'Öresund.",
  associationTitle: "🇩🇿 Association Algérienne Suédoise à Malmö",
  associationSubtitle: "Un lieu de rencontre actif pour les Algériens à Malmö",
  associationIntro: "L'Association Algéro-Suédoise à Malmö (SAF) est une association active qui rassemble les Algériens et les personnes ayant des liens avec l'Algérie vivant à Malmö et dans ses environs.",
  associationWork: "L'association travaille à créer une communauté, à promouvoir les échanges culturels et à donner aux membres l'opportunité de se rencontrer, de collaborer et de participer à diverses activités à Malmö.",
  associationPartners: "L'association fait partie de la vie associative locale et participe à diverses activités avec d'autres associations et organisations à Malmö, y compris ABF et d'autres partenaires locaux.",
  ourActivities: "💫 Nos Activités",
  embassy: "Contact avec l'Ambassade",
  embassyDesc: "Coopération étroite avec l'Ambassade d'Algérie à Stockholm.",
  embassyLink: "Visiter le site web →",
  network: "Réseau International",
  networkDesc: "Collaboration avec les associations algériennes en Scandinavie et en Europe.",
  youth: "Groupe de Jeunes",
  youthDesc: "Groupe d'adolescents actif organisant des événements.",
  local: "Collaboration Locale",
  localDesc: "Participation active à ABF et à d'autres organisations locales.",
  callToAction: "🌟 Faites partie de SAF",
  callToActionDesc: "Association Algéro-Suédoise à Malmö – communauté, culture et collaboration.",
  joinNow: "Adhérer Maintenant",
  contactUs: "Contactez-nous",
  footerTagline: "Association Algéro-Suédoise à Malmö – communauté, culture et collaboration.",
  footerCopyright: "Association Algérienne Suédoise. Tous droits réservés."
},
    common: {
      loading: "جاري التحميل...",
      error: "حدث خطأ ما",
      success: "تم بنجاح!",
      save: "حفظ",
      cancel: "إلغاء",
      delete: "حذف",
      edit: "تعديل",
      view: "عرض",
      back: "رجوع",
      search: "بحث...",
      noResults: "لا توجد نتائج",
      readMore: "اقرأ المزيد",
      showMore: "عرض المزيد",
      showLess: "عرض أقل"
    },
    navigation: {
      home: "الرئيسية",
      about: "عن الجمعية",
      events: "الفعاليات",
      culture: "الثقافة",
      contact: "اتصل بنا",
      login: "تسجيل الدخول",
      register: "تسجيل",
      dashboard: "لوحة التحكم",
      membership: "عضوية",
      admin: "المشرف",
      logout: "تسجيل الخروج",
      language: "اللغة",
      loggedInAs: "مسجل دخول ك:",
      adminDashboard: "لوحة تحكم المشرف"
    }
  }
};

// Helper to get translation
export function t(lang: string, key: string, namespace: string = 'common'): string {
  const ns = translations[lang]?.[namespace];
  if (!ns) {
    // Fallback to Swedish
    const fallback = translations['sv']?.[namespace];
    return fallback?.[key] || key;
  }
  return ns[key] || key;
}

// Get current language from localStorage or default
export function getCurrentLanguage(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('i18nextLng');
    if (saved && ['sv', 'en', 'fr', 'ar'].includes(saved)) {
      return saved;
    }
    // Try browser language
    try {
      const browserLang = navigator.language.split('-')[0];
      if (['sv', 'en', 'fr', 'ar'].includes(browserLang)) {
        return browserLang;
      }
    } catch (e) {
      // Ignore
    }
  }
  return 'sv';
}

// Set language
export function setLanguage(lang: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('i18nextLng', lang);
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }
}

// Language options
export const languages = [
  { code: 'sv', name: 'Swedish', flag: '🇸🇪', nativeName: 'Svenska' },
  { code: 'en', name: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'fr', name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'ar', name: 'Arabic', flag: '🇩🇿', nativeName: 'العربية' },
];