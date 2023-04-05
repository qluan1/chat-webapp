import React from 'react';
import { useConversations } from '../../hooks/conversations';
import { useApi } from '../../hooks/api';
import { Message } from './Message';
import { Container, Button } from '@material-ui/core';

export const Conversations = () => {
  const { cur } = useConversations();
  const { isLoading, error, resend } = useApi();
  return (
    <div>
        { cur.length !== 0 && 
          (<>
            {cur.map((item, index) => item.role !== 'system' && (
              <Message
                key={index}
                message={item}
                typeAnimation={index === cur.length - 1 && item.role === 'assistant' && !item.read} 
                autoScroll={index === cur.length - 1 && item.role === 'assistant' && !item.read}
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
                <Message message={{ role: 'assistant', content: 'Loading...' }} autoScroll />
              )
            }
          </>)
        }
    </div>
  );
}
