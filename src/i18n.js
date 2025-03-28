import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './locales/es';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: esTranslation
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
