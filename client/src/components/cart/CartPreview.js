import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Link, withRouter } from 'react-router-dom';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const CartPreview = () => {
  const { cart } = useContext(CartContext);
  const [cartTotal] = cart;

  const numberOfItems = cartTotal
    .map((item) => {
      return item.qty;
    })
    .reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);

  return (
    <>
      {numberOfItems > 0 ? (
        <div style={{ marginRight: '10px' }}>
          <Link to="/cart">
            <IconButton style={{ color: '#007ea7' }}>
              <Badge badgeContent={numberOfItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default withRouter(CartPreview);
