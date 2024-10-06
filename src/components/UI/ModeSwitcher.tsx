import { FC } from 'react';
import { IconButton, useColorScheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import { LOCAL_STORAGE_KEYS } from '../../types/enums';

const ModeSwitcher: FC = () => {
  const { mode, setMode } = useColorScheme();

  const onClick = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem(LOCAL_STORAGE_KEYS.MODE, newMode);
  };

  return (
    <IconButton color="secondary" onClick={onClick} edge="end">
      {mode !== 'light' ? <LightModeIcon /> : <ModeNightIcon />}
    </IconButton>
  );
};

export default ModeSwitcher;
