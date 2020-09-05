import React, { useContext } from 'react';
import V from '../../img/V';
import G from '../../img/G';
import { CartContext } from '../../CartContext';

const Card = ({ data }) => {
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
    <div className="product-card">
      <div className="img-container">
        <img src={data.img} alt="Not available" />
        <div className="bottom-right">
          {data.v && <V />}
          {data.g && <G />}
        </div>
      </div>
      <div className="card-title container-col">
        <h5 style={{ color: '#f08080', margin: 0 }}>{data.name}</h5>
      </div>
      <div>{/* {' '} */}</div>
      <div style={{ fontSize: 0 }}>
        <button
          id={data._id}
          name={data.name}
          // vegan={true}
          onClick={(e) => updateCart(e, data.v, data.g)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
