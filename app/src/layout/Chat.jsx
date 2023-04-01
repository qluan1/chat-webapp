import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { ChatContainer } from '../components/chat/';
import { InputBox } from '../components/input/';
import { drawerWidth } from '../components/sidebar/Sidebar';

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

export const Chat = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <ChatContainer />
      </div>
      <div className={classes.footer}>
        <InputBox />
      </div>
    </div>
  );
}
