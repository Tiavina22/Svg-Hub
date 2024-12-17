// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importez les traductions
import translationFR from "./lang/fr.json";
import translationEN from "./lang/en.json";

// Configuration de i18next
i18n
  .use(initReactI18next) // Passez le plugin react-i18next
  .init({
    resources: {
      fr: {
        translation: translationFR,
      },
      en: {
        translation: translationEN,
      },
    },
    lng: "fr", // Langue par défaut
    fallbackLng: "fr", // Langue de secours si la langue actuelle n'a pas de traduction
    interpolation: {
      escapeValue: false, // React gère déjà l'échappement des valeurs
    },
  });

export default i18n;