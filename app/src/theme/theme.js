import { createTheme } from '@material-ui/core/styles';

// Define the light and dark mode colors
const lightColors = {
  primary: '#2196f3',
  secondary: '#f50057',
  background: '#FAFAFA',
  backgroundSecondary: '#F4F4F5',
  backgroundAlt: '#E4E4E7',
  text: '#000000',
};
const darkColors = {
  primary: '#64b5f6',
  secondary: '#ff4081',
  background: '#18181B',
  backgroundSecondary: '#27272A',
  backgroundAlt: '#3F3F46',
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
      alt: lightColors.backgroundSecondary,
      alt2: lightColors.backgroundAlt,
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
  localStorage.setItem('theme', newPaletteType);
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
        alt: newPaletteColors.backgroundSecondary,
        alt2: newPaletteColors.backgroundAlt,
      },
      text: {
        primary: newPaletteColors.text,
      },
    },
  });

  return newTheme;
};

export const getInitTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    return toggleTheme(initTheme);
  } else {
    return initTheme;
  }
}
