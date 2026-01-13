import React from 'react';
import { Link } from 'react-router-dom'; // Link'i import et
import logo from '../logo.svg';

function Nav() {
    return (
        <nav className="container">
            <img src={logo} alt="Little Lemon Logo" style={{height: "50px"}} />
            <ul>
                {/* href yerine to kullanıyoruz */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li> {/* Burası booking'e gidecek */}
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;