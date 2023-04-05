import { useContext, useCallback } from "react";
import { ApiContext } from "./ApiContext";
import { ConversationsContext } from "../conversations/ConversationsContext";
import { getChatReply } from './api';

export const useApi = () => {
  const {
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useContext(ApiContext);
  const {
    cur,
    setCur,
    systemMessage,
  } = useContext(ConversationsContext);

  const resend = useCallback(async () => {
    const messages = [...cur];
    setIsLoading(true);
    setError(null);
    try {
      const response = await getChatReply(systemMessage, messages.map(item => ({ role: item.role, content: item.content })));
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setCur(ls => [...ls, { ...data.message }]);
      setIsLoading(false);
    } catch (error) {
      setError(JSON.stringify({
        'error': error.message || 'Something went wrong!',
      }, null, 2));
      setIsLoading(false);
    }    
  }, [cur, systemMessage, setIsLoading, setError, setCur]);

  const getReply = useCallback(async (message) => {
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
      setCur(ls => [...ls, { ...data.message }]);
      setIsLoading(false);
    } catch (error) {
      setError(JSON.stringify({
        'error': error.message || 'Something went wrong!',
      }, null, 2));
      setIsLoading(false);
    }
  }, [cur, systemMessage, setIsLoading, setError, setCur]);

  const setMessageRead = useCallback((index) => {
    const ls = [...cur];
    if (index === undefined) {
      ls[ls.length - 1].read = true;
    } else {
      ls[index].read = true;
    }
    setCur(ls);
  }, [cur, setCur]);

  return {
    isLoading,
    error,
    getReply,
    resend,
    setMessageRead,
  };
};
