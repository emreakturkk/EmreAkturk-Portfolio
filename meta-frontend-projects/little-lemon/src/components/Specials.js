import React from 'react';
// Resimlerin yolunu senin dosya isimlerine göre ayarladım
import greekSaladImage from '../greek salad.jpg';
import bruschettaImage from '../bruchetta.svg';
import lemonDessertImage from '../lemon dessert.jpg';

function Specials() {
    return (
        <section className="specials">
            <div className="container">
                
                {/* Üst Kısım: Başlık ve Buton */}
                <div className="specials-header">
                    <h1>This weeks specials!</h1>
                    <button>Online Menu</button>
                </div>

                {/* Kartlar (Grid Yapısı) */}
                <div className="cards-grid">
                    
                    {/* KART 1: Greek Salad */}
                    <article className="card">
                        <img src={greekSaladImage} alt="Greek Salad" />
                        <div className="card-content">
                            <div className="card-header">
                                <h3>Greek Salad</h3>
                                <span className="price">$12.99</span>
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.</p>
                            <a href="/order" className="delivery-btn">Order a delivery 🛵</a>
                        </div>
                    </article>

                    {/* KART 2: Bruschetta */}
                    <article className="card">
                        <img src={bruschettaImage} alt="Bruschetta" />
                        <div className="card-content">
                            <div className="card-header">
                                <h3>Bruschetta</h3>
                                <span className="price">$5.99</span>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <a href="/order" className="delivery-btn">Order a delivery 🛵</a>
                        </div>
                    </article>

                    {/* KART 3: Lemon Dessert */}
                    <article className="card">
                        <img src={lemonDessertImage} alt="Lemon Dessert" />
                        <div className="card-content">
                            <div className="card-header">
                                <h3>Lemon Dessert</h3>
                                <span className="price">$5.00</span>
                            </div>
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is authentic.</p>
                            <a href="/order" className="delivery-btn">Order a delivery 🛵</a>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}

export default Specials;