import React from 'react';
import { Box, Grid } from '@material-ui/core';

const SubtotalItem = ({ title, value }) => {
  return (
    <Grid container>
      <Grid container item xs={12} justify="space-between">
        <Grid item>
          <Box>{title}</Box>
        </Grid>
        <Grid item>
          <Box>{value}</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SubtotalItem;
