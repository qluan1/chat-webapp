import React, { useState, useContext } from 'react';
import { ConversationsContext } from './ConversationsContext';
import { saveConversationsToLocalStorage } from './io';

export const useConversations = () => {
  const { conversations, setConversations, cur, setCur, systemMessage, setSystemMessage } = useContext(ConversationsContext);
  return {
    systemMessage,
    setSystemMessage,
    conversations,
    setConversations,
    cur,
    setCur
  };
}
