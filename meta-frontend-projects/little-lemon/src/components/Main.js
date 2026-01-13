import React, { useReducer, useState } from 'react'; // 👈 useState eklemeyi unutma
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { initializeTimes, updateTimes } from './timesReducer';

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    
    // 👇 YENİ: Rezervasyon bilgilerini tutacak State
    const [bookingData, setBookingData] = useState(null);

    const navigate = useNavigate();

    const submitForm = (formData) => {
        const isSubmitted = window.submitAPI(formData);

        if (isSubmitted) {
            // 👇 YENİ: Veriyi hafızaya alıyoruz
            setBookingData(formData);
            navigate("/confirmed");
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route 
                    path="/booking" 
                    element={
                        <BookingPage 
                            availableTimes={availableTimes} 
                            dispatch={dispatch} 
                            submitForm={submitForm} 
                        />
                    } 
                />
                {/* 👇 YENİ: bookingData'yı onay sayfasına gönderiyoruz */}
                <Route 
                    path="/confirmed" 
                    element={<ConfirmedBooking bookingData={bookingData} />} 
                />
            </Routes>
        </main>
    );
}

export default Main;