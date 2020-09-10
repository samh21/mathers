import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import {
  Grid,
  Typography,
  Chip,
  FormControl,
  InputLabel,
  Select,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  image: {
    objectFit: 'cover',
    width: '60px',
    height: '60px',
  },
}));

const CartItem = ({ data }) => {
  const classes = useStyles();
  const { cart } = useContext(CartContext);
  const [cartTotal, setCartTotal] = cart;

  const removeFromCart = (id) => {
    console.log('remove' + id);
    const newCart = cartTotal.filter((item) => {
      return item.id !== id;
    });
    setCartTotal(newCart);
  };

  const updateQty = (e) => {
    if (Number(e.target.value) === 0) {
      console.log('yes');
      removeFromCart(e.target.id);
      return;
    }

    const index = cartTotal.findIndex((element) => element.id === e.target.id);
    const newArray = [...cartTotal];
    newArray[index] = { ...newArray[index], qty: Number(e.target.value) };

    setCartTotal(newArray);
  };

  return (
    <>
      <Grid
        item
        xs={12}
        container
        justify="space-between"
        style={{ marginBottom: '5px' }}
      >
        <Grid item xs={2}>
          <img className={classes.image} src={data.link} alt={data.name} />
        </Grid>
        <Grid item container xs={8}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              {data.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {data.vegan && (
              <Chip
                size="small"
                label="Vegan"
                color="secondary"
                variant="outlined"
              />
            )}
            {data.gluten && (
              <Chip
                size="small"
                label="Gluten"
                color="secondary"
                variant="outlined"
              />
            )}
          </Grid>
        </Grid>
        <Grid item xs={2} container justify="flex-end">
          <Grid>
            <FormControl>
              <InputLabel htmlFor="age-native-simple">Quantity</InputLabel>
              <Select native id={data.id} value={data.qty} onChange={updateQty}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={0}>Remove</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CartItem;
