import React, { useContext } from 'react';
import { useConversations } from '../../hooks/conversations/';
import { ApiContext } from '../../hooks/api';
import { ChatBody } from './ChatBody';
import { Container, Button } from '@material-ui/core';

export const ChatContainer = () => {
  const { cur } = useConversations();
  const { isLoading, error, resend } = useContext(ApiContext);
  return (
    <div>
        { cur.length !== 0 && 
          (<>
            {cur.map((item, index) => item.role !== 'system' && (
              <ChatBody
                key={index}
                message={item}
                typeAnimation={index === cur.length - 1 && item.role === 'assistant' && !item.read} 
                messageIndex={index}
              />
            ))}
            {
              error && (
                <Container>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={resend}
                  >
                    Resend
                  </Button>
                </Container>
              )
            }
            {
              isLoading && (
                <ChatBody message={{ role: 'assistant', content: 'Loading...' }} />
              )
            }
          </>)
        }
    </div>
  );
}
