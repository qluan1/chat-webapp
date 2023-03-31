import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChatThemeProvider } from './theme/ChatThemeProvider'
import { ConversationsProvider } from './hooks/conversations'
import { ApiProvider } from './hooks/api'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatThemeProvider>
      <ConversationsProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </ConversationsProvider>
    </ChatThemeProvider>
  </React.StrictMode>,
)
