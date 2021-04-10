import React from "react";
import { useCountUp } from "react-countup";
import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import { hoveredCardBoxShadow } from "../CATCard";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: ({ color }: { color: any }): any => color,
    borderColor: ({ color }: { color: any }): any => color,
    border: '2px solid',
    padding: '50px',
    textAlign: 'center',
    flexBasis: '100%',
    marginTop: '15px',
    marginBottom: '15px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
      flexGrow: 1,
      margin: '15px',
    },
    '&:hover': {
      boxShadow: hoveredCardBoxShadow,
    }
  },
  title: {
    marginBottom: '10px',
  }
}));

const Stat = ({ animated, title, description, value, color, prefix, suffix }: any) => {
  const classes = useStyles({ color });
  const { countUp: animatedValue } = useCountUp({ end: value });

  return (
    <Box className={classes.root}>
      <span>{prefix}</span>
      <Typography variant="h1" classes={{ root: classes.title }}>{title}</Typography>
      <Typography variant="h2" classes={{ root: classes.title }}>{animated ? animatedValue : value}<span>{suffix}</span></Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
};

export default Stat;