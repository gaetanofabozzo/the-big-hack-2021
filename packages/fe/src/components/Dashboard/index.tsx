import React, { useState } from "react";
import { RouteComponentProps, useParams } from "@reach/router";
import {
  makeStyles,
  Typography,
  Container,
  Card,
  Grid,
  Theme,
  Box,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import Navbar from "../Navbar";
import CATCard from "../CATCard";
import Map from "../Maps";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import LineChart from "../Charts/LineChart";
import SingleAreaChart from "../Charts/SingleAreaChart";
import Chatbot from "../Chatbot";

import useGeoLocalization from "../../hooks/useGeoLocalization";
import useCategories from "../../hooks/useCategories";
import useAgeGroup from "../../hooks/useAgeGroup";
import useMunicipalitiesVaccines from "../../hooks/useMunicipalitiesVaccines";
import useVaccines from "../../hooks/useVaccines";
import usePositivesOnVaccines from "../../hooks/usePositivesOnVaccines";
import useRemainingVaccines from "../../hooks/useRemainingVaccines";
import useVaccinesSummary from "../../hooks/useVaccinesSummary";

import { casesTypeColors } from "../../utils/map";
import { UserType } from "../../types";

import Stat from "../Stat";
import { colors } from "../../theme/palette";

import Login from "../Login";
import Footer from "../Footer";

import astrazeneca from "../../assets/astrazeneca.png";
import pfizer from "../../assets/pfizer.png";
import moderna from "../../assets/moderna.png";
import { useEffect } from "react";

const useStyles = makeStyles((_theme: Theme) => ({
  logo: {
    maxWidth: 40,
    padding: "15px",
  },
  title: {
    margin: "20px 0 10px",
  },
  bigTitle: {
    fontSize: "40px",
    margin: "20px 0 10px",
  },
  container: {},
  iconButton: {},
}));

const USER_TYPE_INFOS = {
  [UserType.DECISION_MAKER]: {
    title: "Dashboard Decision Maker",
  },
  [UserType.CITTADINO]: {
    title: "Dashboard Cittadino",
  },
};

const Dashboard: React.FC<RouteComponentProps> = (_props) => {
  const classes = useStyles();
  const { type }: { type: UserType } = useParams();
  const [casesType, setCasesType] = useState<string>("numberOfVaccines");
  const [showChatbot, setShowChatbot] = useState(true);
  const [currentCoordinates, setCurrentCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  const [zoom, setZoom] = useState(8);
  //const [comune, setComune] = useState({});
  const [isLogged, setIsLogged] = useState<boolean>(
    type === UserType.CITTADINO
  );

  const { coordinates } = useGeoLocalization({ place: "Villaricca" });
  const { vaccines, loading } = useMunicipalitiesVaccines();
  const { data: ageGroup, loading: ageLoading } = useAgeGroup();
  const { data: categories } = useCategories();
  const { vaccines: dataVaccines } = useVaccines();
  const { positivesOnVaccines } = usePositivesOnVaccines();
  const { data: remainingVaccines } = useRemainingVaccines();
  const {
    data: vaccineSummary,
    loading: loadingSummary,
  } = useVaccinesSummary();

  useEffect(() => {
    setCurrentCoordinates({
      lat: coordinates.latitude,
      lng: coordinates.longitude,
    });
  }, [coordinates]);
  /*
  useEffect(() => {
    console.log(currentCoordinates);
  }, [currentCoordinates]);*/

  const cases = [
    { title: "Numero Vaccini", key: "numberOfVaccines" },
    { title: "Numero Positivi", key: "numberOfPositives" },
    { title: "Numero Tamponi", key: "numberOfSwabs" },
  ];

   const retrieveRTEmoti = (rt: number) => {
    let symbol = 0x1f641;
    if (rt < 0.8) symbol = 0x1f620;
    else if (rt > 1.3) symbol = 0x1f642;

    return <span role="img" style={{marginLeft: '13px'}}>
        {String.fromCodePoint(symbol)}
    </span>;
  }

  const cittadinoStats = !loadingSummary
    ? [
        {
          title: "Indice di Contagio",
          value: vaccineSummary?.rt,
          description: `Valore RT, ultimo aggiornamento ${vaccineSummary?.ultimo_aggiornamento}`,
          color: colors.primary,
          suffix: retrieveRTEmoti(vaccineSummary?.rt),
        },
        {
          title: "Totale Vaccinati",
          value: vaccineSummary?.percentuale_vaccinati,
          suffix: "%",
          description: `Percentuale vaccinati rispetto alla popolazione Campana, 
      ultimo aggiornamento ${vaccineSummary?.ultimo_aggiornamento}`,
          color: colors.purpleDark,
          animated: true,
        },
      ]
    : [];

  const supplierColors = {
    AstraZeneca: colors.purpleDark,
    "Pfizer/BioNTech": colors.primary,
    Moderna: colors.warning,
  };

  const supplierLogo = {
    AstraZeneca: astrazeneca,
    "Pfizer/BioNTech": pfizer,
    Moderna: moderna,
  };

  const decisionMakerStats = remainingVaccines.map(
    ({ dosiRestanti, fornitore, giorniTolleranza }: any) => ({
      animated: true,
      title: fornitore,
      value: dosiRestanti,
      prefix: (
        <img
          className="supplier-logo"
          style={{ width: "60px", height: "30px" }}
          src={
            supplierLogo[
              fornitore as "AstraZeneca" | "Pfizer/BioNTech" | "Moderna"
            ]
          }
        />
      ),
      suffix: " disponibili",
      description: `È previsto che le dosi termineranno in ${giorniTolleranza} giorni, in mancanza di ulteriori consegne`,
      color:
        supplierColors[
          fornitore as "AstraZeneca" | "Pfizer/BioNTech" | "Moderna"
        ],
    })
  );

  const stats =
    type === UserType.DECISION_MAKER ? decisionMakerStats : cittadinoStats;

  if (!isLogged) {
    return <Login onLogin={() => setIsLogged(true)} />;
  }

  return (
    <>
      <Navbar />

      <Container maxWidth="lg" classes={{ root: classes.container }}>
        <Typography variant="h1" classes={{ root: classes.bigTitle }}>
          {USER_TYPE_INFOS[type].title}
        </Typography>

        <Box
          style={{ display: "inline-flex", width: "100%", marginTop: "15px" }}
          justifyContent="space-between"
        >
          {stats.map((stat: any) => (
            <Stat {...stat} key={stat.title} />
          ))}
        </Box>

        <Typography variant="h3" classes={{ root: classes.title }}>
          Monitoraggio Adesioni Campagna Vaccinale Covid-19
        </Typography>

        <Grid container spacing={3}>
          {cases.map(({ key, title }: { key: string; title: string }) => (
            <Grid item xs={12} sm={4}>
              <CATCard
                onChange={() => setCasesType(key)}
                color={
                  casesTypeColors[
                    key as
                      | "numberOfVaccines"
                      | "numberOfPositives"
                      | "numberOfSwabs"
                  ].hex
                }
                selected={casesType === key}
              >
                {title}
              </CATCard>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Autocomplete
              id="comune"
              onChange={(_e, value) => {
                setZoom(18);
                setCurrentCoordinates({
                  lat: value.latitude,
                  lng: value.longitude,
                });
              }}
              options={vaccines}
              getOptionLabel={(option: any) => option?.name}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Cerca il tuo comune"
                  variant="outlined"
                />
              )}
            />
            <Card style={{ padding: 0 }}>
              {!loading ? (
                <Map
                  data={vaccines}
                  casesType={casesType}
                  zoom={zoom || 8}
                  center={currentCoordinates}
                />
              ) : (
                "Loading"
              )}
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
                bars={[
                  { dataKey: "pfizer", fill: colors.primary },
                  { dataKey: "astra", fill: "#9a0151" },
                  { dataKey: "moderna", fill: colors.warning },
                ]}
              />
            </Card>
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
                        lines={[
                          {
                            dataKey: "prima_dose",
                            stroke: colors.primary,
                            name: "prima dose",
                          },
                          {
                            dataKey: "seconda_dose",
                            stroke: colors.warning,
                            name: "seconda dose",
                          },
                        ]}
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Grid>

              {/* <Grid item xs={12}>
              <Typography variant="h3" classes={{ root: classes.title }}>
                Piano vaccinale, realtà e previsioni
              </Typography>
              <Typography variant="h4">
                Dove siamo e dove dovremmo essere con i consumi dei vaccini
              </Typography>
              <Card>
                <SingleAreaChart data={positivesOnVaccines} />
              </Card>
            </Grid> */}

              <Grid item xs={12}>
                <Typography variant="h3" classes={{ root: classes.title }}>
                  Rapporto Positivi/Vaccinati
                </Typography>
                <Card>
                  <SingleAreaChart
                    data={positivesOnVaccines}
                    dataKey="date"
                    areas={[
                      {
                        dataKey: "positiviSuVaccini",
                        stroke: colors.primaryDark,
                        fill: colors.primaryLight,
                      },
                    ]}
                  />
                </Card>
              </Grid>
            </>
          )}

          <Grid item xs={12}>
            <Typography variant="h3" classes={{ root: classes.title }}>
              Andamento dosi somministrate per fascia d'età
            </Typography>
            <Typography variant="h4" classes={{ root: classes.title }}>
              Prime e seconde dosi
            </Typography>

            <Grid container spacing={3} justify="center">
              {!ageLoading
                ? ageGroup.map(({ name, prima_dose, seconda_dose }: any) => (
                    <Grid item sm={2} xs={12}>
                      <Card style={{ flex: 1 }}>
                        <Typography
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            margin: "10px",
                            fontSize: "27px",
                          }}
                        >
                          {name}
                        </Typography>
                        <PieChart
                          data={[
                            { name: "prima dose", value: prima_dose },
                            { name: "seconda dose", value: seconda_dose },
                          ]}
                          datakey={"value"}
                        />
                      </Card>
                    </Grid>
                  ))
                : "Loading"}
            </Grid>
          </Grid>

          {type === UserType.CITTADINO && (
            <Chatbot
              opened={showChatbot}
              toggleOpen={() => setShowChatbot(!showChatbot)}
            />
          )}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Dashboard;
