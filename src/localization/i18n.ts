import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

import { LANGUAGES } from '../types/enums';

import { DEFAULT_LANG, SERVER_URL } from '../constants/constants';

const NAMESPACES = ['header', 'auth'];

const serverLoadPath = `${SERVER_URL}locales/{{lng}}/{{ns}}.json`;

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: DEFAULT_LANG,
    supportedLngs: [LANGUAGES.EN, LANGUAGES.RU],
    ns: NAMESPACES,
    backend: {
      loadPath: serverLoadPath,
    },
  });

export default i18n;
