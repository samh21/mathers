import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: 'Bold',
  },
}));

const SubtotalItem = ({ title, value, color = 'initial' }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        className={classes.root}
        container
        item
        xs={12}
        justify="space-between"
      >
        <Grid item>
          <Typography
            className={classes.root}
            variant="subtitle1"
            color={color}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.root}
            variant="subtitle1"
            color={color}
          >
            {value}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SubtotalItem;
