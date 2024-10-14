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
          default: '#dbdbef',
        },
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                textTransform: 'none',
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
