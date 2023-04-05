import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Conversations } from '../components/Conversations';
import { InputBox } from '../components/Input';
import { drawerWidth } from '../components/Sidebar';

const InputBoxHeight = '150px';

const useStyles = makeStyles((theme) => ({
  container: {
    boxSizing: 'border-box',
    padding: `0 0 ${InputBoxHeight} 0`,
    backgroundColor: theme.palette.background.alt,
    minHeight: '100vh',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: 1,
    overflow: 'auto',
  },
  body: {
    backgroundColor: theme.palette.background.alt2,
  },
  footer: {
    position: 'fixed',
    bottom: '15px',
    width: `calc(100% - ${drawerWidth}px)`,
    height: InputBoxHeight,
  }
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <div className={classes.body}>
          <Conversations />
        </div>
        <div className={classes.footer}>
          <InputBox />
        </div>
    </div>
  );
}
