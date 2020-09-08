import React, { useContext, useState } from 'react';
import { CartContext } from '../../CartContext';
import CartItem from './CartItem';
import { Link, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import ContactForm from './ContactForm';
import Subtotal from './Subtotal';

export const ViewCart = () => {
  const { cart, info } = useContext(CartContext);
  const [cartTotal] = cart;
  const [contact, setContact] = info;
  const [errorMessages, setErrorMessages] = useState();
  let history = useHistory();

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

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let info = contact;
    let errors = [];

    !info.name && errors.push('First Name Required');
    !info.surname && errors.push('Last Name Required');
    !info.email && errors.push('Email Addres Required');
    !info.phone && errors.push('Phone Number Required');
    !info.address1 && errors.push('Address 1 Required');
    !info.town && errors.push('Town Required');
    !info.postcode && errors.push('Postcode Required');

    setErrorMessages(errors);

    if (errors.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      history.push('/checkout');
    } else {
    }
  };

  if (cartTotal.length === 0) {
    return <Redirect to="/shop" />;
  }

  return (
    <div style={{ padding: '15px' }}>
      <div className="cart-bg">
        <div style={{ textAlign: 'center' }}>
          <h4>Shopping Cart</h4>
        </div>
        <hr style={{ marginBottom: 0 }} />
        {cartTotal.map((d, i) => {
          return <CartItem key={i} data={d} />;
        })}

        <div>
          <div className="subtotal">
            <h5>Subtotal:</h5>
            <h5>£{numberOfItems * 6}</h5>
          </div>
          {numberOfItems > 3 ? (
            <div className="subtotal">
              <h5>Discount:</h5>
              <h5 style={{ color: 'red' }}>-£{numberOfItems * 6 - cost}</h5>
            </div>
          ) : null}
          <div className="subtotal">
            <h5>Delivery:</h5>
            <h5>Free</h5>
          </div>
          <div className="subtotal">
            <h5>Grand Total: </h5>
            <h5>£{cost}</h5>
          </div>
        </div>
        <hr />
        <div style={{ textAlign: 'center' }}>
          <h4>Delivery Information</h4>
        </div>

        {errorMessages && (
          <div className="form-errors">
            <div>
              {errorMessages.map((error, index) => {
                return <li key={index}>{error}</li>;
              })}
            </div>
          </div>
        )}
        <Subtotal />
        {/* <ContactForm /> */}
        <hr />
        <div className="cart-buttons">
          <Link to="/shop">
            <h6>Continue Shopping</h6>
          </Link>
          <button onClick={handleSubmit}>Review Order</button>
        </div>
      </div>
    </div>
  );
};
