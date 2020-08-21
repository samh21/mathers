import React from 'react';
import { CartPreview } from './CartPreview';
import '../Nav.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <CartPreview />
    </div>
  );
};

export default NavBar;
