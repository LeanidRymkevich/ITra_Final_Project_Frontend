import { FC } from 'react';
import Router from './router/Router';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import './styles.css';

import theme from './theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme} defaultMode="system">
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
