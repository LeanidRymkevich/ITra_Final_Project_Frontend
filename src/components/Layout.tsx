import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Box } from '@mui/material';

const Layout: FC = () => {
  return (
    <Box
      component={'div'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        bgcolor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box component={'main'} sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
