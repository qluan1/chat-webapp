import { createContext } from 'react';

export const ApiContext = createContext({
  isLoading: false,
  error: null,
  getReply: () => {},
  resend: () => {},
  setMessageRead: () => {},
});
