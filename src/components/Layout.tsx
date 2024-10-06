import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Box, Stack } from '@mui/material';

const Layout: FC = () => {
  return (
    <Stack
      spacing={2}
      component={'div'}
      sx={{
        minHeight: '200vh', // TODO change to 100 later
      }}
    >
      <Header />
      <Box component={'main'} sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Stack>
  );
};

export default Layout;
