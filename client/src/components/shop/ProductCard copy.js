import React, { useContext } from 'react';
import {
  Card,
  Button,
  Chip,
  CardMedia,
  Grid,
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core';

import { CartContext } from '../../CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100px',
  },
  media: {
    width: '150px',
  },
  content: {
    padding: '5px 3px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  boxContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
}));

const ProductCard = ({ data }) => {
  const classes = useStyles();
  const { cart } = useContext(CartContext);
  const [cartTotal, setCartTotal] = cart;

  const updateCart = (e, vegan, gluten) => {
    e.preventDefault();
    const newCart = [...cartTotal];
    const { id, name } = e.target;
    const exists = cartTotal.findIndex((product) => product.id === e.target.id);

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
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card className={classes.root} raised>
          <CardMedia className={classes.media} image={data.img}></CardMedia>
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
              </Box>
              <Box>
                <Button
                  id={data._id}
                  name={data.name}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={(e) => updateCart(e, data.v, data.g)}
                >
                  Buy
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
