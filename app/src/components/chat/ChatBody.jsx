import React, { useContext, useState, useEffect, useRef } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ComputerIcon from '@material-ui/icons/Computer';
import { ApiContext } from '../../hooks/api/ApiContext';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: '80px 15%',
  },
  user: {
    backgroundColor: theme.palette.background.alt
  },
  asisstant: {
    backgroundColor: theme.palette.background.alt2
  }
}));

export const ChatBody = (
  {
    message,
    typeAnimation = false,
    autoScroll = false,
    messageIndex,
  }
) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const { setMessageRead } = useContext(ApiContext);
  const [divHeight, setDivHeight] = useState(0);
  const messageRef = useRef(null);

  useEffect(() => {
    if (typeAnimation) {
      const start = 0;
      let handle = null;
      const f = (index, handle) => {
        clearTimeout(handle);
        if (index < message.content.length) {
          setText(message.content.slice(0, index + 1));
          handle = setTimeout(() => f(index + 1, handle), 20);
        } else {
          if (messageIndex !== -1) {
            setMessageRead(messageIndex);
          }
        }
      }
      // handle animation
      handle = setTimeout(() => f(start, handle), 20);
    } else {
      setText(message.content);
    }
  }, []);

  useEffect(() => {
    if (messageRef.current) {
      setDivHeight(messageRef.current.clientHeight);
    }
  }, [text]);

  useEffect(() => {
    autoScroll && messageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [divHeight]);

  return (
    <div
      className={`${classes.root} ${message.role === 'user' ? classes.user : classes.asisstant}`}
      ref={messageRef}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {
            message.role === 'user'
            ? <AccountBoxIcon fontSize='large'/>
            : <ComputerIcon fontSize='large'/>
          }
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {text}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
