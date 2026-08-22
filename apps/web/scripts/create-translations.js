const fs = require('fs');
const path = require('path');

const translations = {
  sv: {
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

// Create directories and files
const localesDir = path.join(__dirname, '../public/locales');

// Ensure directories exist
Object.keys(translations).forEach(lang => {
  const langDir = path.join(localesDir, lang);
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }
  
  const ns = translations[lang];
  Object.keys(ns).forEach(namespace => {
    const filePath = path.join(langDir, `${namespace}.json`);
    // Write without BOM by using 'utf8' encoding (no BOM)
    fs.writeFileSync(filePath, JSON.stringify(ns[namespace], null, 2), 'utf8');
    console.log(`✅ Created: ${lang}/${namespace}.json`);
  });
});

console.log('🎉 All translation files created successfully!');