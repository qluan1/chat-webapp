import React, { createContext, useState } from 'react';
import { loadConversationsFromLocalStorage } from './io';

export const ConversationsContext = createContext({
  conversations: [],
  setConversations: () => {},
  cur: [],
  setCur: () => {},
  systemMessage: '',
  setSystemMessage: () => {},
});

export const ConversationsProvider = ({ children }) => {
  const [conversations, setConversations] = useState(loadConversationsFromLocalStorage());
  const [ cur, setCur] = useState([]);
  const [ systemMessage, setSystemMessage ] = useState('');
  return (
    <ConversationsContext.Provider
      value={{
        conversations,
        setConversations,
        cur,
        setCur,
        systemMessage,
        setSystemMessage,
      }}
    >
      { children }
    </ConversationsContext.Provider>
  );
}
