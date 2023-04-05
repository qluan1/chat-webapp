import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './theme/ThemeProvider'
import { ConversationsProvider } from './hooks/conversations'
import { ApiProvider } from './hooks/api'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ConversationsProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </ConversationsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
