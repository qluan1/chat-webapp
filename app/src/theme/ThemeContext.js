import { createContext } from 'react';
import { initTheme } from './theme';

export const ThemeContext = createContext({
  theme: initTheme,
  toggleTheme: () => {}
});
