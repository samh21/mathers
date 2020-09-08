import React, { useState, useContext } from 'react';
import { CartContext } from '../../CartContext';
import SubtotalItem from './SubtotalItem';

const Subtotal = () => {
  const { cart } = useContext(CartContext);
  const [cartTotal] = cart;

  const numberOfItems = cartTotal
    .map((item) => {
      return item.qty;
    })
    .reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);

  const bundles = Math.floor(numberOfItems / 4);
  const individual = Math.ceil(numberOfItems % 4);
  const cost = Number((bundles * 20 + individual * 6).toFixed(2));

  return (
    //   Return Subtotal, Discount, Delivery & Grant Total
    <>
      <SubtotalItem title="Subtotal" value={`£${numberOfItems * 6}`} />
      {numberOfItems > 3 ? (
        <SubtotalItem
          title="Discount"
          value={`-£${numberOfItems * 6 - cost}`}
        />
      ) : null}
      <SubtotalItem title="Delivery" value="Free" />
      <SubtotalItem title="Grand Total" value={`£${cost}`} />
    </>
  );
};

export default Subtotal;
