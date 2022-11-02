import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="advert" className="checkout_ad" />
                <h2>Your Shopping Basket</h2>
                <CheckoutProduct />
                <CheckoutProduct />
                <CheckoutProduct />

            </div>

            <div className="checkout_right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout;