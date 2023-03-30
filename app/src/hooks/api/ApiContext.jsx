import React, { createContext, useState, useContext } from 'react';
import { ConversationsContext } from '../conversations/ConversationsContext';
import { getChatReply } from './api';

export const ApiContext = createContext({
  isLoading: false,
  error: null,
  response: null,
});

export const ApiProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    cur,
    setCur,
    systemMessage,
    setSystemMessage,
  } = useContext(ConversationsContext);

  const getReply = async (message) => {
    setCur(ls => [...ls, { role: 'user', content: message }]);
    setIsLoading(true);
    setError(null);
    try {
      const response = await getChatReply(systemMessage, cur);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setCur(ls => [...ls, { ...data.choices[0].message }]);
      setIsLoading(false);
    } catch (error) {
      setError(JSON.stringify({
        'error': error.message || 'Something went wrong!',
      }, null, 2));
      setIsLoading(false);
    }
  };

  return (
    <ApiContext.Provider 
      value={{
        isLoading,
        error,
        response,
        getReply,
      }}
    >
      { children }
    </ApiContext.Provider>
  );
}
