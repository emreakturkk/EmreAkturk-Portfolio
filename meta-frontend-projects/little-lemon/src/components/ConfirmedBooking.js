import React from 'react';

// Props olarak bookingData'yı alıyoruz
function ConfirmedBooking({ bookingData }) {
    return (
        <div className="container" style={{textAlign: "center", padding: "80px 20px"}}>
            <h1 style={{color: "#495E57", fontSize: "3rem"}}>Booking Confirmed! ✅</h1>
            <p style={{fontSize: "1.2rem"}}>We are looking forward to seeing you at Little Lemon.</p>

            {/* Eğer veri varsa tabloyu göster */}
            {bookingData && (
                <div style={{marginTop: "40px", display: "flex", justifyContent: "center"}}>
                    <table className="booking-table">
                        <thead>
                            <tr>
                                <th colSpan="2">Reservation Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Date:</strong></td>
                                <td>{bookingData.date}</td>
                            </tr>
                            <tr>
                                <td><strong>Time:</strong></td>
                                <td>{bookingData.time}</td>
                            </tr>
                            <tr>
                                <td><strong>Guests:</strong></td>
                                <td>{bookingData.guests} people</td>
                            </tr>
                            <tr>
                                <td><strong>Occasion:</strong></td>
                                <td>{bookingData.occasion}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            
            {/* Tekrar Anasayfaya Dönme Butonu (Opsiyonel ama şık durur) */}
            <a href="/" className="delivery-btn" style={{marginTop: "30px", display: "inline-block"}}>Back to Home</a>
        </div>
    );
}

export default ConfirmedBooking;