import { FC } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useScrollTrigger, Fade, Box } from '@mui/material';

import { SCROLL_ELEM_ID } from './Header';

const BUTTON_POSITION = {
  position: 'fixed',
  bottom: 16,
  right: 16,
};

const ScrollTop: FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });

  const onClick = () => {
    const anchor = document.querySelector(`#${SCROLL_ELEM_ID}`);

    if (anchor) {
      console.log(anchor);
      anchor.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box onClick={onClick} role="presentation" sx={{ ...BUTTON_POSITION }}>
        <Fab size="small" color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollTop;
