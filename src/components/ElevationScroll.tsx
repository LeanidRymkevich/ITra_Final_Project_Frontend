import { cloneElement, FC, ReactElement } from 'react';
import { useScrollTrigger } from '@mui/material';

const TRIGGER_HEIGHT_THRESHOLD = 0;

const ElevationScroll: FC<{ children: ReactElement }> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: TRIGGER_HEIGHT_THRESHOLD,
  });

  return children
    ? cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
};

export default ElevationScroll;
