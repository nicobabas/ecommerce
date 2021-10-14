import Product from '../Product/Product';
import './Products.css';
import React, {useState} from 'react';


const items = [
    {
        title: "cours Jenny",
        attributes: "React + js + plop",
        price: 6500,
    },
    {
        title: "cours Francois",
        attributes: "React + js + Coucou",
        price: 6500,
    },
    {
        title: "cours Jean-Francois",
        attributes: "Php + symfony",
        price: 6499,
    },
    {
        title: "cours Romain",
        attributes: "Php + symfony",
        price: 7000,
    },
    {
        title: "cours MorganeFreeman",
        attributes: "React + Json",
        price: "Free",
    },
    {
        title: "cours Vincent",
        attributes: "React + js + Php + symphony",
        price: 0.49,
    },
    {
        title: "cours Nico",
        attributes: "Php + symfony",
        price: 2500,
    },
    {
        title: "Cours Salim !! Cours",
        attributes: "Course à pied",
        price: 0.5
    },
    {
        title: "Cours Fiverr",
        attributes: "de Tout",
        price: 5
    },
    
]


const Products = (cart,updateCart}) => {
    const [cart, updateCart] = useState(0);
    

return (
    <div className="Products">

        {items.map(item => (
            <Product
                title={item.title}
                attributes={item.attributes}
                price={` ${item.price} €`}
            />
        ))}
    </div>
)};


export default Products;