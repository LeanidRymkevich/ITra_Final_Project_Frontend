import { FC, Suspense } from 'react';
import Router from './router/Router';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import './localization/i18n';
import './styles/styles.css';

import theme from './themes/theme';
import Loader from './components/UI/Loader';
import { store } from './redux/store';

const App: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme} defaultMode="system">
        <Provider store={store}>
          <CssBaseline />
          <Router />
        </Provider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
