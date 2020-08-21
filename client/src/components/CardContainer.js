import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { CartPreview } from './CartPreview';

export default function CardContainer() {
  const [dbRequest, setDbRequest] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((res) => {
      setDbRequest(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <CartPreview />
      </div>
      <h1 className="mathers-heading">Mather's Ice Cream</h1>
      <div className="container">
        {dbRequest &&
          dbRequest.map((d, i) => {
            return <Card key={i} data={d} />;
          })}
      </div>
    </>
  );
}
