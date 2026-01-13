import React from 'react';

function CustomersSay() {
    return (
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
                        <p>"The Greek Salad was excellent! It tasted just like my grandma used to make."</p>
                    </div>

                    {/* Yorum 2 */}
                    <div className="review-card">
                        <div className="rating">⭐⭐⭐⭐⭐</div>
                        <div className="reviewer">
                            <img src="https://i.pravatar.cc/150?img=5" alt="User" />
                            <span>Jane Smith</span>
                        </div>
                        <p>"I loved the atmosphere and the lemon dessert was simply divine."</p>
                    </div>

                    {/* Yorum 3 */}
                    <div className="review-card">
                        <div className="rating">⭐⭐⭐⭐⭐</div>
                        <div className="reviewer">
                            <img src="https://i.pravatar.cc/150?img=8" alt="User" />
                            <span>Michael Brown</span>
                        </div>
                        <p>"Great service and very friendly staff. Highly recommended!"</p>
                    </div>

                    {/* Yorum 4 */}
                    <div className="review-card">
                        <div className="rating">⭐⭐⭐⭐⭐</div>
                        <div className="reviewer">
                            <img src="https://i.pravatar.cc/150?img=12" alt="User" />
                            <span>Sarah Lee</span>
                        </div>
                        <p>"The Bruschetta is a must-try! Will definitely come back again."</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default CustomersSay;