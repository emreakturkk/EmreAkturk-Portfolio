import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './timesReducer';

// --- MOCK API ---
// fetchAPI fonksiyonunu sahte olarak tanımlıyoruz
const mockFetchAPI = function(date) {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

beforeAll(() => {
    window.fetchAPI = mockFetchAPI;
});

// --- UNIT TESTS ---

// 1. HTML5 DOĞRULAMA TESTLERİ (Validation)
test('HTML5 validation attributes are applied correctly', () => {
    render(
        <BookingForm 
            availableTimes={["17:00", "18:00"]} 
            dispatch={() => {}} 
            submitForm={() => {}} 
        />
    );

    // Tarih alanı
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');

    // Saat alanı
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toHaveAttribute('required');

    // Misafir sayısı alanı
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
});

// 2. JAVASCRIPT & REACT STATE TESTLERİ (Buton Kilitleme)
test('Submit button is disabled when fields are empty', () => {
    render(
        <BookingForm 
            availableTimes={["17:00"]} 
            dispatch={() => {}} 
            submitForm={() => {}} 
        />
    );

    // Başlangıçta form boş olduğu için buton DISABLED olmalı
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();
});

test('Submit button is enabled when fields are valid', () => {
    render(
        <BookingForm 
            availableTimes={["17:00"]} 
            dispatch={() => {}} 
            submitForm={() => {}} 
        />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const submitButton = screen.getByRole('button');

    // Formu geçerli verilerle dolduruyoruz
    fireEvent.change(dateInput, { target: { value: '2025-10-10' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    
    // (Occasion zorunlu olmadığı için doldurmasak da olur, ama dolduralım)
    // Occasion opsiyonel olduğu için butonun açılmasına engel değil.

    // Artık butonun AKTİF (enabled) olmasını bekliyoruz
    expect(submitButton).not.toBeDisabled();
});

// 3. REDUCER FONKSİYON TESTLERİ (Önceki alıştırmadan)
test('initializeTimes returns the correct expected value', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same value provided in the state', () => {
    const state = [];
    const action = { type: 'UPDATE_TIMES', payload: '2023-01-01' };
    const newState = updateTimes(state, action);
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(newState).toEqual(expectedTimes);
});