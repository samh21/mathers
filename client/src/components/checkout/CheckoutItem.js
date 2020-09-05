import React from 'react';

// Return each row of the shopping cart

const CheckoutItem = ({ data }) => {
  return (
    <>
      <tr>
        <td>{data.name}</td>
        <td>
          {data.vegan ? 'Vegan' : null}
          {data.gluten ? 'Gluten' : null}
        </td>
        <td align="right">{data.qty}</td>
      </tr>
    </>
  );
};

export default CheckoutItem;
