import React from "react";
import logo from '../assets/images/heart2.png'

function Header(){
    return(
        <div className="nav-main">
            <img src={logo} className="nav-logo" alt="logo" />
            <div className="nav-header">
                <ul>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">Stories</a></li>
                    <li><a href="/#">About Us</a></li>
                    <li><a href="/#">Testimonials</a></li> 
                    <li><a href="/#">Contact Us</a></li>
                </ul>
                <button><a href="/login">Login</a></button>
                <button><a href="/sign-up">Register</a></button>
            </div>
        </div>
    )
}

export default Header;