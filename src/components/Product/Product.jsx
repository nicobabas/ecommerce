import "./Product.css";
import React, { useState } from "react";

const Product = ({ title, attributes, price }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="Product">
      <h1>{title}</h1>
      <span> {` x ${count}`}</span>
      <span> {`${parseInt(price) * count} €`}</span>
      <ul>
        <li>{attributes}</li>
        <li>{price}</li>
      </ul>
      <button onClick={() => setCount(count + 1)}>Ajouter au Panier</button>
    </div>
  );
};

export default Product;
