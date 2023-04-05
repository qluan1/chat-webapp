import React from 'react';
import { Content } from './Content';
import { Sidebar } from '../components/sidebar';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    padding: 0,
    margin: 0,
  }
});

export const Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
      <Content />
    </div>
  )
};
