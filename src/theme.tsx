import red from '@material-ui/core/colors/red';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#6f4037',
    },
    secondary: {
      main: '#ffe1e0',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
