import { LANGUAGES } from '../types/enums';

const SERVER_URL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_DEVELOPMENT_SERVER_URL
    : import.meta.env.VITE_PRODUCTION_SERVER_URL;

const APP_TITLE = 'QuestionForms';

const DEFAULT_MODE = 'dark';
const DEFAULT_LANG = LANGUAGES.EN;

const DELAY_BEFORE_UNAUTH = 5000; // ms

export {
  DEFAULT_MODE,
  APP_TITLE,
  DEFAULT_LANG,
  SERVER_URL,
  DELAY_BEFORE_UNAUTH,
};
