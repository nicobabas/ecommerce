import './Product.css'
import React, {useState} from 'react';


const Product = ({title, attributes, price}) => (
    <div className="Product" onClick={() => setCount(count + 1)}>
        <h1>{title}</h1>
        <ul>
            <li>{attributes}</li>
            <li>{price}</li>
        </ul>
    </div>
);


export default Product;