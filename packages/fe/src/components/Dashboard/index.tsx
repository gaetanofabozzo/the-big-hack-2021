import React, { useState } from 'react';
import { RouteComponentProps, useParams } from '@reach/router';
import { makeStyles, Typography, Container, Card, Grid, Theme } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';

import Navbar from '../Navbar';
import BarChart from '../Charts/BarChart';
// import LineChart from '../Charts/LineChart';
import StackedAreaChart from '../Charts/StackedAreaChart';
import Map from '../Maps';

import useGeoLocalization from '../../hooks/useGeoLocalization';
// import useVaccines from '../../hooks/useVaccines';
import useMunicipalitiesVaccines from '../../hooks/useMunicipalitiesVaccines';
import { casesTypeColors } from '../../utils/map';
import { UserType } from '../../types';
import CATCard from '../CATCard';
// import useAgeGroup from '../../hooks/useAgeGroup';

const useStyles = makeStyles((_theme: Theme) => ({
  logo: {
    maxWidth: 40,
    padding: '15px',
  },
  title: {
    margin: '20px 0 10px',
  },
  container: {},
  iconButton: {},
}));

const USER_TYPE_INFOS = {
  [UserType.DECISION_MAKER]: {
    title: 'Dashboard Decision Maker',
    description: "Da qui puoi monitorare l'andamento della campagnia vaccinale",
  },
  [UserType.CITTADINO]: {
    title: 'Dashboard Cittadino',
    description: "Da qui puoi monitorare l'andamento della campagnia vaccinale",
  }
}

const Dashboard: React.FC<RouteComponentProps> = (_props) => {
  const [casesType, setCasesType] = useState<string>('numberOfVaccines');
  const classes = useStyles({ selected: casesType });
  const { coordinates } = useGeoLocalization({ place: 'Villaricca' });
  const { vaccines, loading } = useMunicipalitiesVaccines();
  const { type } : { type: UserType } = useParams();
  const cases = [
    { title: 'Numero Vaccini', key: 'numberOfVaccines' },
    { title: 'Numero Positivi', key: 'numberOfPositives' },
    { title: 'Numero Tamponi', key: 'numberOfSwabs' },
  ];

  return (
    <>
      <Navbar />
      
      <Container maxWidth="lg" classes={{ root: classes.container }}>
        <Typography variant="h1" classes={{ root: classes.title }}>
          {USER_TYPE_INFOS[type].title}
        </Typography>

        <Typography variant="h3" classes={{ root: classes.title }}>
          Monitoraggio Adesioni Campagna Vaccinale Covid-19
        </Typography>
        
        <Grid container spacing={3}>
          {cases.map(({ key, title }: { key: string, title: string }) => (
            <Grid item xs={12} sm={4}>
              <CATCard
                onChange={() => setCasesType(key)}
                color={casesTypeColors[key as 'numberOfVaccines'|'numberOfPositives'|'numberOfSwabs'].hex}
                selected={casesType === key}
              >
                {title}
              </CATCard>
            </Grid>
          ))}

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

          <Grid item xs={12}>
            <Typography variant="h3" classes={{ root: classes.title }}>
              Andamento dosi somministrate per categoria
            </Typography>
            <Card>
              <BarChart data={vaccines} dataKey="numberOfPositives"/>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3" classes={{ root: classes.title }}>
              Andamento dosi somministrate per fascia d'età
            </Typography>

            <Card>
              <BarChart data={vaccines} dataKey="numberOfPositives"/>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3" classes={{ root: classes.title }}>
              Andamento vaccini somministrati su base giornaliera
            </Typography>
            
            <Typography variant="h4">
              Prime e seconde dosi
            </Typography>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Card>
                  <BarChart data={vaccines} dataKey="numberOfPositives"/>
                </Card>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Card>
                  <BarChart data={vaccines} dataKey="numberOfPositives"/>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3" classes={{ root: classes.title }}>
              Vaccini disponibili per produttore
            </Typography>
            <Card>
              <BarChart data={vaccines} dataKey="numberOfPositives"/>
            </Card>
          </Grid>

        
          <Grid item xs={12}>
            <Typography variant="h3" classes={{ root: classes.title }}>
              Piano vaccinale, realtà e previsioni
            </Typography>
            <Typography variant="h4">
              Dove siamo e dove dovremmo essere con la consegna e la somministrazione dei vaccini
            </Typography>
            <Card>
              <StackedAreaChart data={vaccines} />
            </Card>
          </Grid>

        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;