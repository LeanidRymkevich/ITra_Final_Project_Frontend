import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

const GRADIENT_ID = 'gradient';

const Loader: FC = () => {
  return (
    <Backdrop sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })} open={true}>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        size="8rem"
        sx={{ 'svg circle': { stroke: `url(#${GRADIENT_ID})` } }}
      />
    </Backdrop>
  );
};

export default Loader;
