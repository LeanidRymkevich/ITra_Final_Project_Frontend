import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Box } from '@mui/material';

import ScrollTop from './ScrollTop';

const Layout: FC = () => {
  return (
    <Box
      component={'div'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        minHeight: '200vh', // TODO change to 100 later
      }}
    >
      <Header />
      <Box component={'main'} sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <ScrollTop />
    </Box>
  );
};

export default Layout;
