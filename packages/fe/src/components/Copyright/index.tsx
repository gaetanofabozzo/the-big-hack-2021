import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

export default function Copyright() {
  return (
    <Box p={8}>
      <Typography variant="body2" color="textSecondary" align="center">
        {`${new Date().getFullYear()} © Made with ❤ by CLF Group`}
      </Typography>
    </Box>
  );
}