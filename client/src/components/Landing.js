import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <header className="landing">
      <div className="dark">
        <h1>Mather's Ice Cream</h1>
        <h2>
          Homemade ice cream.... currently home delivery only. Free home
          delivery in the Forres area every Friday.
        </h2>
        <Link to="/shop" style={{ textDecoration: 'none' }}>
          <p className="button" href="">
            Enter Shop
          </p>
        </Link>
      </div>
    </header>
  );
}
