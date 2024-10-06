import { createTheme } from '@mui/material';

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          default: '#0d121b',
        },
      },
    },
    light: {
      palette: {
        background: {
          default: '#ebebef',
        },
      },
    },
  },
});

export default theme;
