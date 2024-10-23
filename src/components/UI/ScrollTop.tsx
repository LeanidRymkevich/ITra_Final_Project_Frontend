import { FC, useRef, useState } from 'react';

import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fade, Box } from '@mui/material';

import { SCROLL_ELEM_ID } from '../Header/CustomAppBar';

const BUTTON_POSITION = {
  position: 'fixed',
  bottom: 16,
  right: 16,
  zIndex: 1050,
};

const HIDE_SCROLL_BTN_DELAY = 2000; // ms
const SCROLL_Y_BTN_SHOW = 100;

const ScrollTop: FC = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const timerId = useRef(0);

  const onClick = () => {
    const anchor = document.querySelector(`#${SCROLL_ELEM_ID}`);

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  };

  const hideBtnWithDelay = () => {
    if (timerId.current) return;
    timerId.current = setTimeout(() => {
      setShowScrollBtn(false);
    }, HIDE_SCROLL_BTN_DELAY);
  };

  const cancelBtnHiding = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY >= SCROLL_Y_BTN_SHOW) {
      setShowScrollBtn(true);
      timerId.current = 0;
    }
  });

  window.addEventListener('scrollend', hideBtnWithDelay);

  return (
    <Fade
      in={showScrollBtn}
      onMouseEnter={cancelBtnHiding}
      onMouseLeave={hideBtnWithDelay}
    >
      <Box onClick={onClick} role="presentation" sx={{ ...BUTTON_POSITION }}>
        <Fab size="small" color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollTop;
