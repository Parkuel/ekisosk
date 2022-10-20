import React from "react";
import "./Product.css";

function Product(props) {
    return (
        <div className="product">
            <div className="product_info">
                <p className="product_title">{props.title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <p className="product_rating">
                    {Array(props.rating)
                    .fill()
                    .map(() => (
                        "⭐"
                    // <p>⭐</p>
                    ))}
                </p>
            </div>
            <img src={props.image} alt="" />
            <button className="product_button">Add to Basket</button>
        </div>
    )
}

export default Product;
