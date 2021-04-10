import { Box, Grid, makeStyles, Typography, Theme } from "@material-ui/core";
import React from "react";
import cn from "classnames";

import smile from "./assets/smile.svg";

const useStyles = makeStyles((theme: Theme) => ({
  moodContainer: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
  mood: {
    height: '100px',
    margin: '34px',
  },
  title: {
    marginBottom: '15px',
  },
  npsContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
  nps: {
    padding: '20px',
    background: '#F8DAA3',
    width: 'fit-content',
  },
}));

export default function NpsMoodChart() {
  const npsValue = 7.3;
  const classes = useStyles();

  return(
    <Box>
      <Grid container>
        <Grid item sm={6} className={classes.moodContainer}>
          <img src={smile} className={classes.mood} />
        </Grid>

        <Grid item sm={6} className={classes.npsContainer}>
          <Typography variant="h1" className={classes.title}>Sentiment</Typography>
          <Typography variant="h1" className={cn(classes.nps, classes.title)}>{npsValue}</Typography>
          <Typography variant="body2">0 - 10</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}