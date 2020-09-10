import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Shop from './components/shop/Shop';
import ContactForm from './components/cart/ContactForm';
import Subtotal from './components/cart/Subtotal';
function App() {
  return (
    // <ContactForm />
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/shop" exact component={Shop} />
    </Router>
  );
}

export default App;
