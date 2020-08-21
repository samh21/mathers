import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Redirect, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
  const { cart, info } = useContext(CartContext);
  const [cartTotal] = cart;
  const [contact] = info;
  let history = useHistory();

  const numberOfItems = cartTotal
    .map((item) => {
      return item.qty;
    })
    .reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('./api/sendmail', {
        contact,
        cartTotal,
        cost,
      });
      console.log(res);
      history.push('/confirmation');
    } catch (err) {
      console.log(err.message);
    }
  };

  const bundles = Math.floor(numberOfItems / 4);
  const individual = Math.ceil(numberOfItems % 4);
  const cost = Number((bundles * 20 + individual * 6).toFixed(2));

  if (!cartTotal.length) return <Redirect to="/shop" />;

  return (
    <div className="cart-bg checkout">
      <h4 style={{ textAlign: 'center' }}>Order Summary</h4>
      <div>
        <table className="greyGridTable">
          <thead>
            <tr>
              <td>Flavour</td>
              <td></td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>Grand Total</td>
              <td></td>
              <td>£{cost}</td>
            </tr>
          </tfoot>

          <tbody>
            {cartTotal.map((item, i) => {
              return <CheckoutItem key={i} data={item} />;
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <h4 style={{ textAlign: 'center' }}>Delivery Information</h4>
        <table>
          <tbody className="contact">
            <tr>
              <td>{`${contact.name} ${contact.surname}`}</td>
            </tr>
            <tr>
              <td>{contact.address1}</td>
            </tr>
            {contact.address2 ? (
              <tr>
                <td>{contact.address2}</td>
              </tr>
            ) : null}
            <tr>
              <td>{contact.town}</td>
            </tr>
            <tr>
              <td>{contact.postcode.toUpperCase()}</td>
            </tr>
            <tr>
              <td>{contact.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="contact">
        <div>Confirmation of your order will be sent to</div>
        <div> {contact.email}</div>
      </div>
      <hr />
      <div className="cart-buttons">
        <Link to="/cart">
          <h6>Back to cart</h6>
        </Link>
        <button onClick={handleSubmit}>Order my Ice Cream</button>
      </div>
    </div>
  );
};

const CheckoutItem = ({ data }) => {
  return (
    <>
      <tr>
        <td>{data.name}</td>
        <td>
          {data.vegan ? 'Vegan' : null}
          {data.gluten ? 'Gluten' : null}
        </td>
        <td align="right">{data.qty}</td>
      </tr>
    </>
  );
};

export default Checkout;
