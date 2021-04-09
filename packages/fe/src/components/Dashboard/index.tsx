import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import logo from '../../assets/logo.png';

const useStyles = makeStyles({
  logo: {
    maxWidth: 40,
    padding: '15px',
  },
});

const Dashboard: React.FC<RouteComponentProps> = (props) => {
  console.info(props);
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <img src={logo} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default Dashboard;