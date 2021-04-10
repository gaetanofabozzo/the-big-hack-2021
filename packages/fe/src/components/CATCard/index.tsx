import React from 'react';
import { Card, makeStyles } from "@material-ui/core";

export const cardBoxShadow = '0px 8px 4px -6px rgba(0, 0, 0, 0.1), 0px 1px 4px -2px rgba(0, 0, 0, 0.3)';
export const hoveredCardBoxShadow = '0px 8px 4px -6px rgba(0, 0, 0, 0.1), 0px 8px 10px -4px rgba(0, 0, 0, 0.3)';
export const cardContentShadow = '0px -1px 0px 0px rgb(238, 243, 247)';

const useStyles = makeStyles({
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
      borderColor: ({ color }: { selected: boolean, color: any }): any => color,
      color: ({ color }: { selected: boolean, color: any }): any => color,
    },
    // @ts-ignore
    borderColor: ({ selected, color }: { selected: boolean, color: any }): any => (
      selected ? color : 'inherit'
    ),
    // @ts-ignore
    color: ({ selected, color }: { selected: boolean, color: any }): any => (
      selected ? color : 'inherit'
    ),    
  },
});

interface Props {
  onChange: () => void;
  color: any;
  selected: boolean;
  children: React.ReactChildren | string;
}

export default function CATCard({
  onChange, color, selected, children
}: Props) {
  const classes = useStyles({ selected, color });
  return (
    <Card 
      variant="outlined"
      classes={{ root: classes.cardRoot }}
      tabIndex={0}
      role="button"
      onClick={onChange}
    >
      {children}
    </Card>
  )
}