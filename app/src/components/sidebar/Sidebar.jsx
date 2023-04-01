import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { ChatThemeContext } from '../../theme';

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: 'relative',
  },
  bottom: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const { theme, toggleTheme } = useContext(ChatThemeContext);
  return (
    <div>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.bottom}>
          <Divider />
          <List>
            <ListItem button onClick={toggleTheme}>
              <ListItemIcon>
                {
                  theme.palette.type === 'light'
                  ? <WbSunnyIcon />
                  : <Brightness2Icon />
                }
              </ListItemIcon>
              <ListItemText>
                {
                  theme.palette.type === 'light'
                  ? 'Light Mode'
                  : 'Dark Mode'
                }
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
