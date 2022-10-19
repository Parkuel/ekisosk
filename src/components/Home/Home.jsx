import React from "react";
import "./Home.css"
import Product from "../Product/Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <div className="home_image">

                </div>
                <Product />
            </div>
        </div>
    )
}

export default Home;