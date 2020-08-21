import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const CartItem = ({ data }) => {
  const { cart } = useContext(CartContext);
  const [cartTotal, setCartTotal] = cart;

  const removeFromCart = (e) => {
    const newCart = cartTotal.filter((item) => {
      return item.id !== e.target.id;
    });
    setCartTotal(newCart);
  };

  const updateQty = (e) => {
    const index = cartTotal.findIndex((element) => element.id === e.target.id);
    const newArray = [...cartTotal];

    newArray[index] = { ...newArray[index], qty: Number(e.target.value) };

    setCartTotal(newArray);
  };

  if (data) {
    return (
      <div className="view-cart-container">
        <div>
          <img src={data.link} alt="" />
        </div>
        <div>
          <p className="flavour">{data.name}</p>
          {data.vegan ? <p className="flavour"> Vegan</p> : null}
          {data.gluten ? <p className="flavour"> Gluten</p> : null}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginLeft: 'auto',
            alignItems: 'center',
          }}
        >
          <div style={{ marginLeft: 'auto', marginRight: '10px' }}>
            <input
              type="number"
              min="1"
              max="20"
              id={data.id}
              value={data.qty}
              onChange={updateQty}
              style={{ width: '35px' }}
            />
          </div>

          <div>
            <button
              id={data.id}
              onClick={removeFromCart}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CartItem;
