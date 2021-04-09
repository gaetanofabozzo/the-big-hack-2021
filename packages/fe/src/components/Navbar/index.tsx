import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

import logo from '../../assets/logo.png';

const useStyles = makeStyles({
  logo: {
    maxWidth: '70px',
    padding: '15px',
  },
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="transparent">
      <Toolbar>
        <img src={logo} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;