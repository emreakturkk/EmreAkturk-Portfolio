import React from 'react';
import logo from '../logo.svg'; // Nav'da kullandığın logonun aynısı

function Footer() {
    return (
        <footer>
            <section className="container">
                <div className="footer-content">
                    
                    {/* 1. KOLON: Logo */}
                    <div className="footer-col">
                        <img src={logo} alt="Little Lemon" className="footer-logo" /> 
                    </div>

                    {/* 2. KOLON: Navigasyon */}
                    <div className="footer-col">
                        <h3>Doormat Navigation</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/reservations">Reservations</a></li>
                            <li><a href="/order">Order Online</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>

                    {/* 3. KOLON: İletişim */}
                    <div className="footer-col">
                        <h3>Contact</h3>
                        <ul>
                            <li>Address: 123 Town Street, Chicago</li>
                            <li>Phone: +00 123 456 789</li>
                            <li>Email: little@lemon.com</li>
                        </ul>
                    </div>

                    {/* 4. KOLON: Sosyal Medya */}
                    <div className="footer-col">
                        <h3>Social Media Links</h3>
                        <ul>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Twitter</a></li>
                        </ul>
                    </div>

                </div>
            </section>
        </footer>
    );
}

export default Footer;