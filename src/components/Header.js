import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

function Header() {
    const {cartItems, favItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    const favClassName = favItems.length > 0 ? "ri-heart-fill" : "ri-heart-line"

    return (
        <header>
            <Link to="/favorites">
                <i className={`${favClassName} header-icon`}></i>
                
            </Link>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                <i className={`${cartClassName} header-icon`}></i>
            </Link>
        </header>
    )
}

export default Header

