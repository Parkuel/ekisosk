import React from "react";
import "./CheckoutProduct.css"

function CheckoutProduct() {
    return (
        <div className="checkoutProduct">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className="checkoutProduct_img" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>11.99</strong>
                </p>
                <p className="checkoutProduct_rating">
                ⭐⭐⭐
                </p>
                <button>Remove From Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct;