import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import cn from "classnames";

import smile from "./assets/smile.svg";

const useStyles = makeStyles({
  moodContainer: {
    textAlign: 'center',
  },
  mood: {
    height: '100px',
    margin: '34px',
  },
  title: {
    marginBottom: '15px',
  },
  nps: {
    padding: '20px',
    background: '#F8DAA3',
    width: 'fit-content',
  },
})

export default function NpsMoodChart() {
  const npsValue = 7.3;
  const classes = useStyles();

  return(
    <Box>
      <Grid container>
        <Grid item sm={6} className={classes.moodContainer}>
          <img src={smile} className={classes.mood} />
        </Grid>

        <Grid item sm={6}>
          <Typography variant="h1" className={classes.title}>Sentiment</Typography>
          <Typography variant="h1" className={cn(classes.nps, classes.title)}>{npsValue}</Typography>
          <Typography variant="body2">0 - 10</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}