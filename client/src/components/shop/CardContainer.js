import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import ProductCard from './ProductCard';
import shop from '../../img/unsplash/shop.jpg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)),
    url(${shop})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: '40vh',
  },
}));

export default function CardContainer() {
  const classes = useStyles();
  const [dbRequest, setDbRequest] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((res) => {
      setDbRequest(res.data);
    });
  }, []);

  return (
    <>
      <div className={classes.background}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{
            color: 'white',
            height: '100%',
            padding: ' 0 20px',
            fontFamily: 'roboto, serif',
          }}
        >
          <Typography variant="h2">Home Delivery</Typography>
          <Typography variant="subtitle1">
            We offer local deliveries on a weekly basis. Order before Midnight
            every wednesday for a Friday afternoon delivery
          </Typography>
        </Box>
      </div>
      <div data-testid="myTest">
        <Grid container justify="center" style={{ padding: '20px 0' }}>
          <Grid item xs={12} sm={10} md={8} spacing={4} container>
            {dbRequest &&
              dbRequest.map((d, i) => {
                return <ProductCard data-testid="resolved" key={i} data={d} />;
              })}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
