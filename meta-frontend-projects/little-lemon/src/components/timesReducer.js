// src/components/timesReducer.js


/**
 * Reducer Functions
 * initializeTimes: Fetches the initial available times for today's date.
 * updateTimes: Updates the available times based on the selected date.
 */

// 1. Başlangıç saatlerini bugünün tarihine göre API'den çekiyoruz
export const initializeTimes = () => {
    // Bugünün tarihini al
    const today = new Date();
    
    // API'den bugünün saatlerini iste (window.fetchAPI global olduğu için window ile çağırıyoruz)
    // Eğer API scripti yüklenmediyse hata vermemesi için kontrol ekleyebiliriz ama şimdilik direkt çağıralım.
    return window.fetchAPI ? window.fetchAPI(today) : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; 
    // Not: fetchAPI yoksa varsayılan saatleri döndürdük (güvenlik için)
};

// 2. Tarih değişince yeni tarihe göre saatleri API'den çekiyoruz
export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // Gelen tarihi (string) Date objesine çevir
            const date = new Date(action.payload);
            // O tarihin saatlerini API'den al
            return window.fetchAPI(date); 
        default:
            return state;
    }
};