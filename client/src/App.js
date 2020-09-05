import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Shop from './components/shop/Shop';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/shop" exact component={Shop} />
    </Router>
  );
}

export default App;
