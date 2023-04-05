import React, { useState } from 'react';
import { ApiContext } from './ApiContext';

export const ApiProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <ApiContext.Provider 
      value={{
        isLoading,
        error,
        setIsLoading,
        setError,
      }}
    >
      { children }
    </ApiContext.Provider>
  );
}
