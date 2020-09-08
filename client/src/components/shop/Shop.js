import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Checkout from '../checkout/Checkout';
import CardContainer from './CardContainer';
import { CartProvider } from '../../CartContext';
import { ViewCart } from '../cart/ViewCart';
import Confirmation from '../checkout/Confirmation';

export default function Shop() {
  return (
    <CartProvider>
      <div className="demo-site-only">
        <h6>Demo Site Only</h6>
      </div>

      <Router>
        <div className="shop">
          <Route path="/shop" exact component={CardContainer} />
          <Route path="/cart" exact component={ViewCart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/confirmation" exact component={Confirmation} />
        </div>
      </Router>
    </CartProvider>
  );
}
