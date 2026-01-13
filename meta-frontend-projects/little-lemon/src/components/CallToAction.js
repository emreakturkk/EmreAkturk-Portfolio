import React from 'react';
// ".." ile bir üst klasöre (src) çıkıp resmi alıyoruz
import food1 from '../restaurantfood.jpg'; 

function Header() {
    return (
        <header className="hero-section">
            <div className="container hero-container">
                {/* SOL TARAF (Yazılar) */}
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, 
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <button aria-label="On Click">Reserve a Table</button>
                </div>

                {/* SAĞ TARAF (Resim) */}
                <div className="hero-image">
                    {/* Artık import ettiğimiz 'food1' değişkenini kullanıyoruz */}
                    <img src={food1} alt="Little Lemon restaurant food" />
                </div>
            </div>
        </header>
    );
}

export default Header;