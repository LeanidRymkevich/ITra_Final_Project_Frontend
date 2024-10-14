import { FC, Suspense } from 'react';
import Router from './router/Router';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import './localization/i18n';
import './styles/styles.css';

import theme from './themes/theme';
import Loader from './components/UI/Loader';

const App: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme} defaultMode="system">
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
