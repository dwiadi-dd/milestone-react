import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import idTranslation from "./id.json";

const resources = {
  en: { translation: enTranslation },
  id: { translation: idTranslation },
};

i18next
  .use(initReactI18next)
  .init({ resources, lng: "en", interpolation: { escapeValue: false } });

export default i18next;
