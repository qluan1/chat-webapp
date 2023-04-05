import React, { useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { toggleTheme, getInitTheme } from './theme';
import { ThemeContext } from './ThemeContext';


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitTheme());
  return (
    <ThemeContext.Provider
      value = {{
        theme,
        toggleTheme: () => setTheme(theme => toggleTheme(theme)) 
      }}
    >
      <MuiThemeProvider theme={theme}>
        { children }
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
