import React, { useState } from 'react';
import { RouteComponentProps, useParams } from '@reach/router';
import { makeStyles, Typography, Container, Card, Grid, Theme, Fab, Box } from '@material-ui/core';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

import Navbar from '../Navbar';
import CATCard from '../CATCard';
import Map from '../Maps';
import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart';
import LineChart from '../Charts/LineChart';
import StackedAreaChart from '../Charts/StackedAreaChart';

import useGeoLocalization from '../../hooks/useGeoLocalization';
import useCategories from '../../hooks/useCategories';
import useAgeGroup from '../../hooks/useAgeGroup';
import useMunicipalitiesVaccines from '../../hooks/useMunicipalitiesVaccines';
import useVaccines from '../../hooks/useVaccines';

import { casesTypeColors } from '../../utils/map';
import { UserType } from '../../types';

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
  const { data: ageGroup, loading: ageLoading } = useAgeGroup();
  const { data: categories } = useCategories();
  const { vaccines: dataVaccines } = useVaccines();
  const { type } : { type: UserType } = useParams();
  const cases = [
    { title: 'Numero Vaccini', key: 'numberOfVaccines' },
    { title: 'Numero Positivi', key: 'numberOfPositives' },
    { title: 'Numero Tamponi', key: 'numberOfSwabs' },
  ];

  console.log({ dataVaccines });

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
              Andamento dosi somministrate per categoria e produttore
            </Typography>
            <Card>
              <BarChart
                data={categories}
                xDataKey="subject"
                bars={[{ dataKey: 'pfizer', fill: '#03c1f1' }, { dataKey: 'astra', fill: '#9a0151' }, { dataKey: 'moderna', fill: '#b31014' }]}
              />
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3" classes={{ root: classes.title }}>
              Andamento dosi somministrate per fascia d'età
            </Typography>
            <Typography variant="h4" classes={{ root: classes.title }}>
              Prime e seconde dosi
            </Typography>

            <Grid container spacing={3} justify="center">
              {!ageLoading ? ageGroup.map(({ name, prima_dose, seconda_dose }: any) => (
                <Grid item sm={2} xs={12}>
                  <Card style={{ flex: 1 }}>
                    <Typography style={{ textAlign: 'center', fontWeight: 'bold', margin: '10px', fontSize: '27px' }}>{name}</Typography>
                    <PieChart 
                      data={[{ name: 'prima_dose', value: prima_dose }, { name: 'seconda_dose', value: seconda_dose }]}
                      datakey={'value'}
                    />
                  </Card>
                </Grid>
              )) : 'Loading'}
            </Grid>
          </Grid>

          {type === UserType.DECISION_MAKER && (
            <>
             <Grid item xs={12}>
              <Typography variant="h3" classes={{ root: classes.title }}>
                Andamento vaccini somministrati su base giornaliera
              </Typography>
            
              <Grid container spacing={3}>
                <Grid item sm={12} xs={12}>
                  <Card>
                    <LineChart
                      data={dataVaccines}
                      lines={[{ dataKey: 'prima_dose', stroke: '#8884d8' }, { dataKey: 'seconda_dose', stroke: '#82ca9d' }]}
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          
            <Grid item xs={12}>
              <Typography variant="h3" classes={{ root: classes.title }}>
                Piano vaccinale, realtà e previsioni
              </Typography>
              <Typography variant="h4">
                Dove siamo e dove dovremmo essere con i consumi dei vaccini
              </Typography>
              <Card>
                <StackedAreaChart data={vaccines} />
              </Card>
            </Grid>
          </>
        )}

        {type === UserType.CITTADINO && (
          <Box position="fixed" bottom={10} right={10}>
            <Fab aria-label='Ti possiamo aiutare' color='primary'>
              <LiveHelpIcon />
            </Fab>
          </Box>
        )}

        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;