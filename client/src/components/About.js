import React from 'react';
import { Box, makeStyles, Grid, Typography } from '@material-ui/core';
import about from '../img/unsplash/about.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: `linear-gradient(0.25turn, rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url(${about})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    color: 'white',
    fontFamily: 'roboto, serif',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box style={{ margin: '3rem auto' }}>
        <Grid container>
          <Grid item xs={12} display="flex" container>
            <Grid item xs={1} />
            <Grid item xs={10} md={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                style={{ padding: '4rem 0' }}
              >
                <Box>
                  <Typography variant="h3">Mather's Ice Cream</Typography>
                  <Typography variant="subtitle1">
                    Homemade ice cream, sorbets and locally roasted coffee
                    served from the Kiosk at Grant Park. Free home delivery in
                    the Forres area every Friday. We also serve delicious
                    homemade burgers with a variety of options, catering to
                    every taste. Vegetarian and vegan options also available.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={1} md={5} />
          </Grid>
          <Grid item xs={12} display="flex" container>
            <Grid item xs={1} md={5} />
            <Grid item xs={10} md={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                style={{ padding: '4rem 0' }}
              >
                <Box>
                  <Typography variant="h3">Fresh</Typography>
                  <Typography variant="subtitle1">
                    Our products are freshly made to ensure we offer the highest
                    quality. We aim to use seasonal ingredients as much as
                    possible in the products we offer. This includes homegrown
                    fruit, locally roasted coffe beans and meat reared right
                    here in the country of Moray.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid item xs={12} display="flex" container>
            <Grid item xs={1} />
            <Grid item xs={10} md={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                style={{ padding: '4rem 0' }}
              >
                <Box>
                  <Typography variant="h3">Local</Typography>
                  <Typography variant="subtitle1">
                    We use as much local produce as possible for a number of
                    reasons. We simply believe that supporting local businesses
                    is the responsible thing to do. This also helps to keep our
                    carbon footprint as small as possible. We also use recycled
                    packaging to ensure that waste is kept to the absoluite
                    minimum.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={1} md={5} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
