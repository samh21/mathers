import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';

export default function Confirmation() {
  const { info } = useContext(CartContext);
  const [contact] = info;
  return (
    <div className="confirmation">
      <div>
        <h2>We've got your order</h2>
        <p>Confirmation has been sent to {contact.email}</p>
        <p>This confirmation email is for demonstration purposes only</p>
      </div>
    </div>
  );
}
