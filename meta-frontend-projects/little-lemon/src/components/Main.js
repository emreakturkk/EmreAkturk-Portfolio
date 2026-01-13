import React from 'react';
import greekSaladImage from '../greek salad.jpg';
import bruschettaImage from '../bruchetta.svg';
import lemonDessertImage from '../lemon dessert.jpg';
import restaurant from '../restaurant.jpg';
function Main() {
    return (
        <main>
            {/* --- SPECIALS BÖLÜMÜ --- */}
            <section className="specials">
                <div className="container">
                    <div className="specials-header">
                        <h1>This weeks specials!</h1>
                        <button>Online Menu</button>
                    </div>
                    <div className="cards-grid">
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

            {/* --- YENİ: TESTIMONIALS (Yorumlar) BÖLÜMÜ --- */}
            <section className="testimonials">
                <div className="container">
                    <h1 className="testimonials-title">Testimonials</h1>
                    <div className="testimonials-grid">
                        {/* Yorum 1 */}
                        <div className="review-card">
                            <div className="rating">⭐⭐⭐⭐⭐</div>
                            <div className="reviewer">
                                <img src="https://i.pravatar.cc/150?img=1" alt="User" />
                                <span>John Doe</span>
                            </div>
                            <p>"The Greek Salad was excellent!"</p>
                        </div>
                        {/* Yorum 2 */}
                        <div className="review-card">
                            <div className="rating">⭐⭐⭐⭐⭐</div>
                            <div className="reviewer">
                                <img src="https://i.pravatar.cc/150?img=5" alt="User" />
                                <span>Jane Smith</span>
                            </div>
                            <p>"Best Lemon Dessert I've ever had."</p>
                        </div>
                        {/* Yorum 3 */}
                        <div className="review-card">
                            <div className="rating">⭐⭐⭐⭐⭐</div>
                            <div className="reviewer">
                                <img src="https://i.pravatar.cc/150?img=8" alt="User" />
                                <span>Michael B.</span>
                            </div>
                            <p>"Great atmosphere and service."</p>
                        </div>
                         {/* Yorum 4 */}
                         <div className="review-card">
                            <div className="rating">⭐⭐⭐⭐⭐</div>
                            <div className="reviewer">
                                <img src="https://i.pravatar.cc/150?img=12" alt="User" />
                                <span>Sarah L.</span>
                            </div>
                            <p>"Highly recommend the Bruschetta."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- YENİ: ABOUT (Hakkımızda) BÖLÜMÜ --- */}
            <section className="about">
                <div className="container about-container">
                    <div className="about-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                        </p>
                    </div>
                    <div className="about-image">
                        {/* Geçici internet resimleri kullanıyorum, sende varsa değiştiririz */}
                        <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Chefs" className="image-1" />
                        <img src={restaurant} alt="Restaurant" className="image-2" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;