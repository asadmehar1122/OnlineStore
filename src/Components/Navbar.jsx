import React from "react"
import { Link } from "react-router-dom";


const Navbar=()=>{

    return(
        <nav >
            <ul className="left">
                <li><Link to="/">KasurExpress</Link></li>
            </ul>
            <ul className="right">
                <li><Link to="cart">
                    <span className="shoping-cart"> <i class="fas fa-shopping-cart"></i>
                    <span className="cardCounter">0</span>
                    </span>
                </Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;