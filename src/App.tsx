import { FC } from 'react';
import Router from './router/Router';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './styles.css';
import { getInitialMode } from './utils/localStorageUtils';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme} defaultMode={getInitialMode()}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
