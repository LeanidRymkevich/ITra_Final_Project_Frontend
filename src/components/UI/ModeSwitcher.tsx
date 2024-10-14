import { FC } from 'react';
import { IconButton, useColorScheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { getNextThemeMode } from '../../utils/themeModeUtils';

const ModeSwitcher: FC = () => {
  const { mode, setMode } = useColorScheme();

  const onClick = () => {
    setMode(getNextThemeMode(mode));
  };

  return (
    <IconButton color="secondary" onClick={onClick} edge="end">
      {mode !== 'light' ? <LightModeIcon /> : <ModeNightIcon />}
    </IconButton>
  );
};

export default ModeSwitcher;
