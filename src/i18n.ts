import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("./locales/en/translation.json"),
    },
    // th: {
    //   translation: require("./locales/th/translation.json"),
    // },
  },
  lng: "en", // ภาษาเริ่มต้น
  fallbackLng: "en", // ภาษาเมื่อไม่พบแปล
  interpolation: {
    escapeValue: false, // React ปลอดภัยจากการ XSS
  },
});

export default i18n;
