import React from 'react';
import { AppBar, Toolbar, makeStyles, FormControl, InputLabel, Select } from '@material-ui/core';

import logo from '../../assets/logo.png';

const useStyles = makeStyles({
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
    <AppBar position="sticky" classes={{ root: classes.appBar }}>
      <Toolbar>
        <img src={logo} alt="logo" className={classes.logo} />

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="region">Regione</InputLabel>
          <div style={{ flexGrow: 1 }}/>
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
  );
};

export default Navbar;