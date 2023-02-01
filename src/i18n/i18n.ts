import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptbr from './ptbr.json';
import en from './en.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'ptbr',
  fallbackLng: 'ptbr',
  resources: {
    ptbr: {
      translation: ptbr,
    },
    en: {
      translation: en,
    },
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
