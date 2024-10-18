import { FC } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Box, Stack } from '@mui/material';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
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
        <Box component={'main'} sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Stack>
    </HelmetProvider>
  );
};

export default Layout;
