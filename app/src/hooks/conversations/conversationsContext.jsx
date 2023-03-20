import React, { createContext, useState } from 'react';
import { loadConversationsFromLocalStorage } from './io';

export const ConversationsContext = createContext({
  conversations: [],
  setConversations: () => {},
});

export const ConversationsProvider = ({ children }) => {
  const [conversations, setConversations] = useState(loadConversationsFromLocalStorage());
  return (
    <ConversationsContext.Provider value={ {conversations, setConversations} }>
      { children }
    </ConversationsContext.Provider>
  );
}
