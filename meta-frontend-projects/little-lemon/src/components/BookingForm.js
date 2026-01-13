import React, { useState } from 'react';

// Props olarak availableTimes ve dispatch alıyoruz
function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    // --- ESKİ availableTimes useState'ini SİLDİK --- 
    // Artık props.availableTimes kullanacağız.

    // Tarih değiştiğinde çalışacak fonksiyon
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        
        // Babaya (Main.js) haber veriyoruz: "Tarih değişti, saatleri güncelle!"
        props.dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

// ... Diğer kodlar aynı ...

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Form verilerini bir objede topla
        const formData = {
            date,
            time,
            guests,
            occasion
        };

        // Main.js'den gelen fonksiyonu çalıştır!
        props.submitForm(formData);
    }

    // ... Return kısmı aynı ...

    return (
        <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth: '200px', gap: '20px', margin: '0 auto'}}>
            
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                // Tarih değişince özel fonksiyonumuzu çağırıyoruz
                onChange={handleDateChange} 
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                required
            >
                <option value="">Select a time</option>
                {/* Saatleri artık PROPS'tan alıyoruz */}
                {props.availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)} 
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                value={occasion} 
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
            </select>

            <input type="submit" value="Make Your reservation" disabled={!date || !time || !guests} />
        </form>
    );
}

export default BookingForm;