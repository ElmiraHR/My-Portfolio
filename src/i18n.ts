import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';
import de from './locales/de/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de},
      ru: { translation: ru },
    },
    lng: 'en', // Язык по умолчанию
    fallbackLng: 'en', // Резервный язык
    interpolation: {
      escapeValue: false, // React уже экранирует строки
    },
  });

export default i18n;
