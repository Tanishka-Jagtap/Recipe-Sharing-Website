import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EBC76B',
      dark: '#D4B25F',
      light: '#F2D485',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;
