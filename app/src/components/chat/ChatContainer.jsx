import React, { useContext } from 'react';
import { ConversationsContext } from '../../hooks/conversations/ConversationsContext';
import {
  Typography,
} from '@material-ui/core';

export const ChatContainer = () => {
  const { cur } = useContext(ConversationsContext);
  return (
    <div>
      <ul>
        {cur.map((item, index) => (
          <li key={index}>
            <Typography variant="body1" component="span" style={{ fontWeight: 800}}>
              {`${item.role}:`}
            </Typography>
            <Typography variant="body1" component="span" >
              {` ${item.content}`}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}
