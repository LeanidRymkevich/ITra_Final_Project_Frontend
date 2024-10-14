import { Mode } from '@mui/system/cssVars/useCurrentColorScheme';

import { DEFAULT_MODE } from '../constants';

const getNextThemeMode = (mode: Mode | undefined): Mode => {
  if (!mode) return DEFAULT_MODE;
  if (mode === 'system') {
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'dark'
      : 'light';
  }

  return mode === 'dark' ? 'light' : 'dark';
};

export { getNextThemeMode };
