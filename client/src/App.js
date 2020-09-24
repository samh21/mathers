import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Shop from './components/shop/Shop';
import Navbar from './components/Navigation/Navbar';
import Cart from './components/cart/ViewCart';
import Checkout from './components/checkout/Checkout';
import Confirmation from './components/checkout/Confirmation';
import { CartProvider } from './CartContext';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <div className="demo-site-only">
        <h6>Demo Site Only</h6>
      </div>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/confirmation" exact component={Confirmation} />
          <About path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </CartProvider>
    </div>
  );
}

export default App;
