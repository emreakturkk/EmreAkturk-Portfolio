import React from 'react';
import BookingForm from './BookingForm';

function BookingPage(props) {
    return (
        <div className="container" style={{padding: "50px 20px"}}>
            <div className="booking-header">
                <h1>Reserve a Table</h1>
                <p>Please fill in the form below to book your table at Little Lemon.</p>
            </div>
            
            {/* submitForm fonksiyonunu da aşağıya iletiyoruz 👇 */}
            <BookingForm 
                availableTimes={props.availableTimes} 
                dispatch={props.dispatch} 
                submitForm={props.submitForm}
            />
        </div>
    );
}

export default BookingPage;