import React, { useState, createContext } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { initTheme, toggleTheme } from './theme';

export const ChatThemeContext = createContext({
  theme: initTheme,
  toggleTheme: () => {}
});

export const ChatThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initTheme);
  return (
    <ChatThemeContext.Provider
      value = {{
        theme,
        toggleTheme: () => setTheme(theme => toggleTheme(theme)) 
      }}
    >
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </ChatThemeContext.Provider>
  )
}
