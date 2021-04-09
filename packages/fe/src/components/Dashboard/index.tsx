import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { makeStyles, Typography, Container, Card, Grid } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';

import Navbar from '../Navbar';
import BarChart from '../Charts/BarChart';
import Map from '../Maps';

import cities from '../../__mocks__/cities';

const useStyles = makeStyles({
  logo: {
    maxWidth: 40,
    padding: '15px',
  },
  container: {
  },
  iconButton: {},
});

// const mockData = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 400, pv: 2400, amt: 2400}];

const Dashboard: React.FC<RouteComponentProps> = (props) => {
  const [caseType] = useState<string>('numberOfVaccines');

  console.info(props);
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" classes={{ root: classes.container }}>
        <Typography variant="h3">Monitoraggio Adesioni Campagna Vaccinale Covid-19</Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* <Paper>
              <InputBase placeholder="Ricerca per regione" />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper> */}

            <Card>
              <Map cities={cities} casesType={caseType} zoom={10} center={{ lat: 40.851799, lng: 14.268120 }} />
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <BarChart data={cities} />
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <BarChart data={cities} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;