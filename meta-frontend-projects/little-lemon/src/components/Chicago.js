import React from 'react';
import restaurant from '../restaurant.jpg';
function Chicago() {
    return (
        <section className="about">
            <div className="container about-container">
                <div className="about-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.</p>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Chefs" className="image-1" />
                    <img src={restaurant} alt="Restaurant" className="image-2" />
                </div>
            </div>
        </section>
    );
}
export default Chicago;