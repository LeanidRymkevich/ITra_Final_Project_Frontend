import { FC } from 'react';
import Router from './router/Router';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './styles.css';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme} defaultMode="system">
      <Router />
    </ThemeProvider>
  );
};

export default App;
