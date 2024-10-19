import { FC, Suspense } from 'react';
import Router from './router/Router';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import './localization/i18n';
import './styles/styles.css';

import theme from './themes/theme';
import Loader from './components/UI/Loader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme} defaultMode="system">
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Router />
        </QueryClientProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
