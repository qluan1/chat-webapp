import { createContext } from 'react';

export const ApiContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
  error: null,
  setError: () => {},
});
