import React from "react";
import "./Header.css";
import { FaShoppingCart, FaStore, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <Link to="/" style={{textDecoration: "none"}}>
                <div className="header_logo">
                    <FaStore className="header_logoImage" fontSize="25"/>
                    <h2 className="header_logoTitle">iKiosk</h2>
                </div>
            </Link>
            

            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <FaSearch className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <div className="nav_item">
                    <span className="nav_item1">Hello Guest</span>
                    <span className="nav_item2">Sign in</span>
                </div>
                <div className="nav_item">
                    <span className="nav_item1">Your</span>
                    <span className="nav_item2">Shop</span>
                </div>
                <Link to="/checkout" style={{textDecoration: "none"}}>
                    <div className="nav_itemBasket">
                        <FaShoppingCart/>
                        <span className="nav_item2 nav_basketCount">0</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )

}

export default Header