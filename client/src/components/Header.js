import React from 'react';

export default function Header() {
  const orderBy = 'Wednesday 27/05/2020';
  const delivery = 'Friday 29/05/2020';
  return (
    <div className="header">
      <h3>Mather's Home Deliery</h3>

      <p>
        Place your order before {orderBy} for delivery on {delivery}. We deliver
        to addresses in Forres, Kinloss & Findhorn
      </p>
    </div>
  );
}
