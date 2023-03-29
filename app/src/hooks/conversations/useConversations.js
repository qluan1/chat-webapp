import { useState, useContext } from 'react';
import { ConversationsContext } from './conversationsContext';
import { saveConversationsToLocalStorage } from './io';

export const useConversations = () => {
  const { conversations, setConversations } = useContext(ConversationsContext);
  const [curId, setCurId] = useContext(0);

  return {
    conversations,
    curId,
  };
}
