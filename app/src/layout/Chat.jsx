import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: 1,
  },
  body: {
    height: '80%',
  },
  footer: {
    height: '20%',
  }
});

export const Chat = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.body}>
      </div>
      <div className={classes.footer}>
      </div>
    </div>
  );
}