import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { makeStyles, Typography, Container, Card, Grid, Theme } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';

import Navbar from '../Navbar';
// import BarChart from '../Charts/BarChart';
// import LineChart from '../Charts/LineChart';
// import StackedAreaChart from '../Charts/StackedAreaChart';
import Map from '../Maps';

// import cities from '../../__mocks__/cities';

import useGeoLocalization from '../../hooks/useGeoLocalization';
// import useVaccines from '../../hooks/useVaccines';
import useMunicipalitiesVaccines from '../../hooks/useMunicipalitiesVaccines';
import classNames from 'classnames';
import { casesTypeColors } from '../../utils/map';
// import useAgeGroup from '../../hooks/useAgeGroup';

export const cardBoxShadow = '0px 8px 4px -6px rgba(0, 0, 0, 0.1), 0px 1px 4px -2px rgba(0, 0, 0, 0.3)';
export const hoveredCardBoxShadow = '0px 8px 4px -6px rgba(0, 0, 0, 0.1), 0px 8px 10px -4px rgba(0, 0, 0, 0.3)';
export const cardContentShadow = '0px -1px 0px 0px rgb(238, 243, 247)';

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    maxWidth: 40,
    padding: '15px',
  },
  title: {
    margin: '20px 0 10px',
  },
  cardRoot: {
    cursor: 'pointer',
    outline: 0,
    boxShadow: cardBoxShadow,
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 20,
    borderWidth: '4px',
    '&:hover': {
      boxShadow: hoveredCardBoxShadow,
    },
  },
  blueCard: {
    borderColor: ({ selected }: { selected: string }): any => (
      // @ts-ignore
      selected === 'numberOfVaccines' ? casesTypeColors['numberOfVaccines'].hex : 'inherit'
    ),
    color: ({ selected }: { selected: string }): any => (
      // @ts-ignore
      selected === 'numberOfVaccines' ? casesTypeColors['numberOfVaccines'].hex : 'inherit'
    ),
    '&:hover': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
  },
  redCard: {
    borderColor: ({ selected }: { selected: string }): any => (
      // @ts-ignore
      selected === 'numberOfPositives' ? casesTypeColors['numberOfPositives'].hex : 'inherit'
    ),
    color: ({ selected }: { selected: string }): any => (
      // @ts-ignore
      selected === 'numberOfPositives' ? casesTypeColors['numberOfPositives'].hex : 'inherit'
    ),
    '&:hover': {
      borderColor: casesTypeColors['numberOfPositives'].hex,
      color: casesTypeColors['numberOfPositives'].hex,
    },
  },
  yellowCard: {
    borderColor: ({ selected }: { selected: string }): any => (
      // @ts-ignore
      selected === 'numberOfSwabs' ? casesTypeColors['numberOfSwabs'].hex : 'inherit'
    ),
    color: ({ selected }: { selected: string }): any => (
      // @ts-ignore
      selected === 'numberOfSwabs' ? casesTypeColors['numberOfSwabs'].hex : 'inherit'
    ),
    '&:hover': {
      borderColor: casesTypeColors['numberOfSwabs'].hex,
      color: casesTypeColors['numberOfSwabs'].hex,
    },
  },
  container: {},
  iconButton: {},
}));

const Dashboard: React.FC<RouteComponentProps> = (_props) => {
  const [casesType, setCasesType] = useState<string>('numberOfVaccines');
  const classes = useStyles({ selected: casesType });
  const { coordinates } = useGeoLocalization({ place: 'Villaricca' });
  const { vaccines, loading } = useMunicipalitiesVaccines();

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" classes={{ root: classes.container }}>
        <Typography variant="h3" classes={{ root: classes.title }}>
          Monitoraggio Adesioni Campagna Vaccinale Covid-19
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card 
              variant="outlined"
              className={classNames(classes.cardRoot, classes.blueCard)}
              tabIndex={0}
              role="button"
              onClick={() => setCasesType('numberOfVaccines')}
            >
              Numero Vaccini
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card 
              variant="outlined"
              className={classNames(classes.cardRoot, classes.redCard)}
              tabIndex={0}
              role="button"
              onClick={() => setCasesType('numberOfPositives')}
            >
              Numero Positivi
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card 
              variant="outlined"
              className={classNames(classes.cardRoot, classes.yellowCard)}
              tabIndex={0}
              role="button"
              onClick={() => setCasesType('numberOfSwabs')}
            >
              Numero Tamponi
            </Card>
          </Grid>


          <Grid item xs={12}>

            {/* <Paper>
              <InputBase placeholder="Ricerca per regione" />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper> */}

            <Card>
              {!loading ? (
                <Map
                  data={vaccines}
                  casesType={casesType}
                  zoom={8}
                  center={{ 
                    lat: coordinates.latitude,
                    lng: coordinates.longitude
                  }}
                />
              ) : 'Loading'}
            </Card>
          </Grid>

          {/* <Grid item xs={6}>
            <Card>
              <BarChart data={cities} />
            </Card>
          </Grid> */}


          {/* <Grid item xs={6}>
            <Card>
              <LineChart data={lineChartData} />
            </Card>
          </Grid>
          */}

          {/* <Grid item xs={12}>
            <Card>
              <StackedAreaChart data={mVaccines} />
            </Card>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;