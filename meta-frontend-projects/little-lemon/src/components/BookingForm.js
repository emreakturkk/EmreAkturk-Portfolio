import React, { useState } from 'react';

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occasion
        };
        props.submitForm(formData);
    }

    // Geçmiş tarih seçilmesini engellemek için yardımcı fonksiyon
    const getCurrentDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    // ADIM 2: React Doğrulaması
    // Formun geçerli olup olmadığını kontrol eden değişken
    // Tarih var mı? Saat seçildi mi? Misafir sayısı 1'den büyük mü?
    const isFormValid = date !== "" && time !== "" && guests >= 1 && guests <= 10;

    return (
        <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth: '200px', gap: '20px', margin: '0 auto'}} aria-label="Reservation Form">
            
            {/* Tarih */}
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                onChange={(e) => {
                    setDate(e.target.value);
                    props.dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
                }} 
                /* ADIM 1: HTML5 Doğrulaması */
                required 
                min={getCurrentDate()} 
                aria-label="Choose date"
                aria-required="true"
            />

            {/* Saat */}
            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                /* ADIM 1: HTML5 Doğrulaması */
                required
                aria-label="Choose time"
                aria-required="true"
            >
                <option value="">Select a time</option>
                {props.availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>

            {/* Kişi Sayısı */}
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                id="guests" 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)} 
                /* ADIM 1: HTML5 Doğrulaması */
                required
                min="1" 
                max="10" 
                aria-label="Number of guests"
                aria-required="true"
            />

            {/* Özel Gün */}
            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                value={occasion} 
                onChange={(e) => setOccasion(e.target.value)}
                aria-label="Occasion"
            >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
            </select>

            {/* ADIM 2: React ile Buton Kilitleme */}
            {/* isFormValid false ise buton sönük (disabled) kalacak */}
            <input 
                type="submit" 
                value="Make Your reservation" 
                disabled={!isFormValid} 
                aria-label="On Click"
            />
        </form>
    );
}

export default BookingForm;