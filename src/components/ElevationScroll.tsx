import { cloneElement, FC } from 'react';
import { useScrollTrigger } from '@mui/material';

import { ChildrenOnlyProps } from '../types/interfaces';

const TRIGGER_HEIGHT_THRESHOLD = 0;

const ElevationScroll: FC<ChildrenOnlyProps> = ({ children }) => {
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
