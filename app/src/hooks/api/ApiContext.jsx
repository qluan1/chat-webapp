import React, { createContext, useState, useContext } from 'react';
import { ConversationsContext } from '../conversations/ConversationsContext';
import { getChatReply } from './api';

export const ApiContext = createContext({
  isLoading: false,
  error: null,
  getReply: () => {},
  resend: () => {},
  setMessageRead: () => {},
});

export const ApiProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    cur,
    setCur,
    systemMessage,
  } = useContext(ConversationsContext);

  const resend = async () => {
    const messages = [...cur];
    setIsLoading(true);
    setError(null);
    try {
      const response = await getChatReply(systemMessage, messages.map(item => ({ role: item.role, content: item.content })));
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
  }

  const getReply = async (message) => {
    const messages = [...cur, { role: 'user', content: message }];
    setCur(ls => [...ls, { role: 'user', content: message }]);
    setIsLoading(true);
    setError(null);
    try {
      const response = await getChatReply(systemMessage, messages.map(item => ({ role: item.role, content: item.content })));
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

  const setMessageRead = (index) => {
    const ls = [...cur];
    if (index === undefined) {
      ls[ls.length - 1].read = true;
    } else {
      ls[index].read = true;
    }
    setCur(ls);
  }

  return (
    <ApiContext.Provider 
      value={{
        isLoading,
        error,
        getReply,
        resend,
        setMessageRead,
      }}
    >
      { children }
    </ApiContext.Provider>
  );
}
