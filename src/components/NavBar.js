import React, { Component } from 'react';
import { Link } from 'react-router-dom';


 class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
                <Link to="/" >
                    <img src="img/fitness-logo.png" alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center" >
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link" style={{color: "white" }}>Product</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button>
                        <span className="mr-2">
                            {}
                        <i class="fas fa-cart-plus"/>
                        </span>
                        my cart
                    </button>
                </Link>
            </nav>
        )
    }
}



export default NavBar;
