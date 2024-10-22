import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Outlet } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { Box, Stack } from '@mui/material';

import Header from './Header/Header';

import { getPageTitleI18nKey } from '../utils/pageTitleUtil';

const Layout: FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet title={t(`header:${getPageTitleI18nKey(pathname)}`)} />
      <Stack
        spacing={2}
        component={'div'}
        sx={{
          minHeight: '100vh',
        }}
      >
        <Header />
        <Box
          component={'main'}
          sx={{ flexGrow: 1, marginTop: '0px !important' }}
        >
          <Outlet />
        </Box>
      </Stack>
    </HelmetProvider>
  );
};

export default Layout;
