import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Checkout from './Checkout';
import CardContainer from './CardContainer';
import { CartProvider } from '../CartContext';
import { ViewCart } from './ViewCart';
import Confirmation from './Confirmation';

export default function Shop() {
  return (
    <CartProvider>
      <div className="demo-site-only">
        <h6>Demo Site Only</h6>
      </div>

      <Router>
        <div className="shop">
          <div className="dark-overlay">
            <Route path="/shop" exact component={CardContainer} />
            <Route path="/cart" exact component={ViewCart} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/confirmation" exact component={Confirmation} />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}
