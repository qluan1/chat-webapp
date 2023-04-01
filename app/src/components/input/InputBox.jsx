import React, { useState, useContext } from 'react';
import { ApiContext } from '../../hooks/api';
import {
  IconButton,
  TextField,
  Grid,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/styles';
import SendIcon from '@material-ui/icons/Send';

const useStyle = makeStyles({
  container: {
    height: '100%',
    width: '100%',
    padding: '0 20%',
    margin: 0,
  }
});

export const InputBox = () => {
  const {
    isLoading,
    error,
    getReply
  } = useContext(ApiContext);
  const classes = useStyle();
  const [input, setInput] = useState('');
  const handleButtonClick = () => {
    if (!input.trim()) return;
    getReply(input);
    setInput('');
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      handleButtonClick();
    }
  };
  return (
    <Grid container spacing={4} alignItems='center' className={classes.container}>
      <Grid item xs={12}>
        <TextField
          id="input"
          variant="filled"
          value={input}
          onKeyDown={handleKeyDown}
          onChange={e => setInput(e.target.value)}
          size="medium"
          multiline
          minRows={4}
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton
                variant="contained"
                color="primary"
                onClick={handleButtonClick}
                disabled={!!(isLoading || error)}
              >
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}
