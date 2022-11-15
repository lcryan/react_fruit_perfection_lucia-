import React from 'react';

function Product(props) {
    return (
        <div>
            <article className="product">
                <img src={props.image} alt={props.title}/>
                <h2 className="product-name">{props.title}</h2>
                <p className="product-description">{props.description}</p>
            </article>
        </div>);
}

export default Product;