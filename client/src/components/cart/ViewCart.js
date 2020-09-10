import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import CartItem from './CartItem';
import { Redirect } from 'react-router-dom';
import ContactForm from './ContactForm';
import Subtotal from './Subtotal';

import { Grid, Divider, Typography } from '@material-ui/core';

export const ViewCart = () => {
  const { cart } = useContext(CartContext);
  const [cartTotal] = cart;

  if (cartTotal.length === 0) {
    return <Redirect to="/shop" />;
  }

  return (
    <Grid container justify="center">
      <Grid
        item
        xs={12}
        sm={11}
        md={8}
        lg={6}
        justify="center"
        spacing={3}
        container
      >
        <Grid item xs={10}>
          <Typography variant="h4">Shopping Cart</Typography>
        </Grid>
        <Grid item xs={10} container>
          {cartTotal.map((d) => {
            return <CartItem key={d.id} data={d} />;
          })}
        </Grid>

        <Grid item xs={10}>
          <Divider />
        </Grid>

        <Grid item xs={10} container>
          <Subtotal />
        </Grid>

        <Grid item xs={10}>
          <Divider />
        </Grid>

        <Grid item xs={10} container>
          <ContactForm />
        </Grid>
      </Grid>
    </Grid>
  );
};
