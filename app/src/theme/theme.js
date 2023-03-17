import { createTheme } from '@material-ui/core/styles';

// Define the light and dark mode colors
const lightColors = {
  primary: '#2196f3',
  secondary: '#f50057',
  background: '#ffffff',
  text: '#000000',
};
const darkColors = {
  primary: '#64b5f6',
  secondary: '#ff4081',
  background: '#212121',
  text: '#ffffff',
};

// Create the theme
export const initTheme = createTheme({
  palette: {
    type: 'light', // Start with light mode by default
    primary: {
      main: lightColors.primary,
    },
    secondary: {
      main: lightColors.secondary,
    },
    background: {
      default: lightColors.background,
    },
    text: {
      primary: lightColors.text,
    },
  },
});

// Define a function to toggle the theme
export const toggleTheme = (theme) => {
  const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
  const newPaletteColors = newPaletteType === 'light' ? lightColors : darkColors;

  const newTheme = createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      type: newPaletteType,
      primary: {
        main: newPaletteColors.primary,
      },
      secondary: {
        main: newPaletteColors.secondary,
      },
      background: {
        default: newPaletteColors.background,
      },
      text: {
        primary: newPaletteColors.text,
      },
    },
  });

  return newTheme;
};
