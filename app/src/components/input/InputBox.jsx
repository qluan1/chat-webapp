import React, { useState, useContext } from 'react';
import { ApiContext } from '../../hooks/api';
import {
  Button,
  TextField
} from '@material-ui/core';

export const InputBox = () => {
  const {
    isLoading,
    error,
    getReply
  } = useContext(ApiContext);
  const [input, setInput] = useState('');
  const handleButtonClick = () => {
    getReply(input);
    setInput('');
  };
  return (
    <div>
      <TextField
        id="input"
        label="Input"
        variant="filled"
        value={input}
        onChange={e => setInput(e.target.value)}
        size="medium"
        multiline
        minRows={4}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        disabled={!!(isLoading || error)}
      >
        Submit
      </Button>
    </div>
  );
}
