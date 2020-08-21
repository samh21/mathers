import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  // const [total, setTotal] = useState();
  const [cartTotal, setCartTotal] = useState([]);
  const [contact, setContact] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    town: '',
    postcode: '',
  });

  return (
    <CartContext.Provider
      value={{
        cart: [cartTotal, setCartTotal],
        info: [contact, setContact],
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
