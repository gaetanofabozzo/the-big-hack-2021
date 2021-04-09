import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { makeStyles, Typography, Container, Card, Grid } from '@material-ui/core';

import Navbar from '../Navbar';
import BarChart from '../Charts/BarChart';

const useStyles = makeStyles({
  logo: {
    maxWidth: 40,
    padding: '15px',
  },
  container: {
    margin: '15px',
  }
});

const mockData = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 400, pv: 2400, amt: 2400}];

const Dashboard: React.FC<RouteComponentProps> = (props) => {
  console.info(props);
  const classes = useStyles();
  return (
    <>
      <Navbar />
      
      <Container maxWidth="lg" classes={{ root: classes.container }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card>
              <Typography>Andamento dosi somministrate per regione e per categoria</Typography>
              <BarChart data={mockData} />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <Typography>Andamento dosi somministrate per regione e per categoria</Typography>
              <BarChart data={mockData} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;