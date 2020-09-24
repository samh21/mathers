import { Grid, makeStyles, Button, Box } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  imageDiv: (props) => ({
    height: '50vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'rgba(255,255,255, 0.8)',
    backgroundImage: `linear-gradient(0.25turn, rgba(0,0,0,0.3), rgba(0,0,0,0.45)), url(${props.image})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& h1': {
      fontFamily: 'Galada, cursive',
      lineHeight: '1em',
    },
    '& p': {
      fontFamily: 'roboto, serif',
      fontSize: '1.3rem',
      width: '60%',
      textAlign: 'center',
    },
  }),
  button: {
    marginTop: '20px',
    fontSize: '1.3rem',
    color: 'white',
    fontFamily: 'roboto, serif',
    border: '2px solid white',
    borderRadius: '25px',
  },
}));

const GridItem = (props) => {
  const { history } = props;
  const classes = useStyles(props);

  const {
    xs = 12,
    sm = xs,
    md = sm,
    lg = md,
    xl = lg,
    description,
    title,
    action = false,
  } = props;
  return (
    <>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <Box className={classes.imageDiv} style={{}}>
          <h1 style={{ fontSize: '5rem', margin: 0, padding: 0 }}>{title}</h1>
          <p style={{ margin: 0 }}>{description}</p>
          {action && (
            <Button
              className={classes.button}
              variant="outlined"
              color="default"
              size="large"
              onClick={() => history.push('/shop')}
            >
              Home Delivery. Order Now
            </Button>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default withRouter(GridItem);
