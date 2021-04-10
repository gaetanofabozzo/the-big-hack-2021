import React from 'react';
import { AppBar, Link, Box, Toolbar, makeStyles, FormControl, InputLabel, Select } from '@material-ui/core';

import logo from '../../assets/logo.png';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: '70px',
    padding: '15px',
  },
  appBar: {
    background: '#FFF',
  },
  formControl: {}
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="sticky" classes={{ root: classes.appBar }}>
        <Toolbar>
          <Box flexGrow={1}>
            <img src={logo} alt="logo" className={classes.logo} />
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