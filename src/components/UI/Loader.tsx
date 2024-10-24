import { FC } from 'react';

import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Loader: FC = () => {
  return (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
