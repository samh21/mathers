import React, { useContext } from 'react';
import {
  Card,
  Button,
  Chip,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
  CardContent,
  CardActions,
} from '@material-ui/core';

import { CartContext } from '../../CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    boxShadow: 'none',
    flexGrow: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
  },
  media: {
    height: 150,
  },
}));

const ProductCard = ({ data }) => {
  const classes = useStyles();
  const { cart } = useContext(CartContext);
  const [cartTotal, setCartTotal] = cart;

  const updateCart = (vegan, gluten, id, name) => {
    const newCart = [...cartTotal];
    const exists = cartTotal.findIndex((product) => product.id === id);

    if (exists >= 0) {
      newCart[exists] = {
        id,
        name,
        qty: cartTotal[exists].qty + 1,
        isInCart: true,
        vegan,
        gluten,
        link: data.img,
      };
    } else {
      newCart.push({
        id,
        name,
        qty: 1,
        isInCart: true,
        vegan,
        gluten,
        link: data.img,
      });
    }
    setCartTotal(newCart);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
        <Card className={classes.root}>
          {/* <CardMedia
            className={classes.media}
            image={data.img}
            title={data.name}
          /> */}
          <CardContent style={{ padding: '8px 0' }}>
            <Typography
              variant="h6"
              component="h2"
              style={{ textAlign: 'center' }}
            >
              {data.name}
            </Typography>
          </CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
          <CardActions style={{ padding: '10px 0' }}>
            <div style={{ flexGrow: 1 }}>
              <Chip
                size="small"
                label="16oz"
                variant="outlined"
                color="primary"
                style={{ marginRight: '3px' }}
              />
              {data.v && (
                <Chip
                  size="small"
                  label="Vegan"
                  variant="outlined"
                  color="secondary"
                />
              )}
              {data.g && (
                <Chip
                  size="small"
                  label="Gluten"
                  variant="outlined"
                  color="secondary"
                />
              )}
            </div>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              id={data._id}
              name={data.name}
              onClick={() => updateCart(data.v, data.g, data._id, data.name)}
            >
              Buy
            </Button>
          </CardActions>
        </Card>

        {/* <Card className={classes.root} raised>
          <CardMedia className={classes.media} image={data.img}></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.name}
            </Typography>
          </CardContent>
          <Box className={classes.content}>
            <Box>
              <Typography variant="h6">{data.name}</Typography>
            </Box>
            <Box className={classes.boxContent}>
              <Box>
                <Chip
                  size="small"
                  label="16oz tub"
                  variant="outlined"
                  color="primary"
                  style={{ marginRight: '3px' }}
                />
              </Box>
            </Box>
          </Box>
        </Card> */}
      </Grid>
    </>
  );
};

export default ProductCard;
