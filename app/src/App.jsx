import { useState, useContext } from 'react'
import { ChatThemeContext } from './theme/ChatThemeProvider'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Paper, Button, Typography } from '@material-ui/core';


function App() {
  const { toggleTheme } = useContext(ChatThemeContext);
  return (
    <>
      <Paper>
        <Typography variant='h1'>
          Hello World
        </Typography>
      </Paper>
      <Button
        variant='contained'
        color='primary'
        onClick={toggleTheme}
      >
        Toggle Theme
      </Button>
    </>
  )
}

export default App
