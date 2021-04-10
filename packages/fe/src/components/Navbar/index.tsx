import React from 'react';
import { AppBar, Link, Box, Toolbar, makeStyles, FormControl, InputLabel, Select, Theme } from '@material-ui/core';

import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: '70px',
    padding: '15px',
    borderRadius: '10px'
  },
  slogan: {
    fontWeight: 'bold',
    fontSize: '23px',
    color: 'rgb(1, 82, 162)',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  appBar: {
    background: '#FFF',
  },
  formControl: {}
}));

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky" classes={{ root: classes.appBar }}>
        <Toolbar>
          <Box flexGrow={1}>
            <img src={logo} alt="logo" className={classes.logo} />
            <span>CLF</span>
          </Box>

          <Box flexGrow={1} className={classes.slogan}>
            C.L.F. CAMPANIA  
          </Box>

          <Box p={2}>
            <Link href="http://www.soresa.it/Pagine/e-covid_Faq.aspx" target="blank">
              FAQ
            </Link>
          </Box>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="region">Regione</InputLabel>
            <Select
              native
              value="Campania"
              // onChange={handleChange} no needed atm
              label="Regione"
              inputProps={{
                name: 'region',
                id: 'region',
              }}
            >
              <option value="Campania">Campania</option>
            </Select>
          </FormControl>

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;