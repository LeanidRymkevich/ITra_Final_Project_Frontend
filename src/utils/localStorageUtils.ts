import { DEFAULT_MODE } from '../constants';
import { LOCAL_STORAGE_KEYS } from '../types/enums';

const getInitialMode = (): 'light' | 'dark' => {
  const theme = localStorage.getItem(LOCAL_STORAGE_KEYS.MODE) as
    | 'light'
    | 'dark'
    | null;
  if (theme) return theme;
  return window &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : DEFAULT_MODE;
};

export { getInitialMode };
