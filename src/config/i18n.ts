import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationFR from "./lang/fr.json";
import translationEN from "./lang/en.json";
import translationCHN from "./lang/chn.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: translationFR,
      },
      en: {
        translation: translationEN,
      },
      chn: {
        translation: translationCHN,
      },
    },
    lng: "fr",
    fallbackLng: "fr", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;