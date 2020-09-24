import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Link, withRouter } from 'react-router-dom';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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

  const bundles = Math.floor(numberOfItems / 4);
  const individual = Math.ceil(numberOfItems % 4);
  const cost = Number((bundles * 20 + individual * 6).toFixed(2));

  return (
    // <div className="nav-cart">
    //   <div className="cart-preview-cart">
    //     <table>
    //       <tbody>
    //         <tr>
    //           <td>Items in Cart:</td>
    //           <td align="right">{numberOfItems}</td>
    //         </tr>
    //         <tr>
    //           <td>Total:</td>
    //           <td align="right">£{cost}</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     {numberOfItems > 0 ? (
    //       <Link to="/cart">
    //         <h6 className="view-cart-button">View Cart</h6>
    //       </Link>
    //     ) : null}
    //   </div>
    // </div>
    <>
      {numberOfItems > 0 ? (
        <div style={{ marginRight: '10px' }}>
          <Link to="/cart">
            <IconButton style={{ color: '#007ea7' }}>
              <Badge badgeContent={numberOfItems} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default withRouter(CartPreview);
