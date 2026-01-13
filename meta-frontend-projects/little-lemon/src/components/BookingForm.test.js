import { render, screen } from "@testing-library/react";
// 👇 BU SATIRI EKLEMEMİZ GEREKİYORDU 👇
import '@testing-library/jest-dom'; 

import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './timesReducer';

// 1. TEST
test('Renders the Choose date label', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

// 2. TEST
test('initializeTimes returns the correct expected value', () => {
    const expectedTimes = [
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ];
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(expectedTimes);
});

// 3. TEST
test('updateTimes returns the same value provided in the state', () => {
    const state = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', payload: '2023-01-01' };
    const newState = updateTimes(state, action);
    const expectedTimes = initializeTimes();
    expect(newState).toEqual(expectedTimes);
});