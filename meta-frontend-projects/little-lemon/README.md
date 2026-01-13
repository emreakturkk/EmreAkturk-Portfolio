# Little Lemon Restaurant Reservation App 🍋

## Project Description
This is the Capstone Project for the Meta Front-End Developer Professional Certificate. It is a fully functional and responsive web application designed for the Little Lemon restaurant. The application allows users to browse the menu and book a table for specific dates and times.

The application manages state effectively to ensure that booking times are available based on the selected date, utilizing a mock API.

## 🚀 Features

### 1. Responsive Navigation & Layout
- A semantic HTML5 structure including `<nav>`, `<main>`, and `<footer>`.
- Fully responsive design that adapts to mobile, tablet, and desktop screens.

### 2. Table Reservation System
- **Dynamic Time Slots:** Users can select a date, and the available time slots will update automatically (fetched from a mock API).
- **Controlled Forms:** All form inputs (Date, Time, Guests, Occasion) are controlled React components.

### 3. Form Validation & UX
- **HTML5 Validation:** Prevents submission of empty fields.
- **Client-Side Validation:** The submit button is disabled until all fields are valid.
- **Visual Feedback:** Invalid fields are highlighted to guide the user.
- **Confirmation:** Upon successful submission, users are redirected to a Confirmation Page displaying their booking details in a table.

### 4. Unit Testing
- Comprehensive unit tests written with **Jest** and **React Testing Library**.
- Tests cover:
  - Static text rendering.
  - `initializeTimes` and `updateTimes` reducer functions.
  - Form validation logic (HTML5 attributes and button states).

### 5. Accessibility (a11y)
- The application follows WCAG guidelines.
- Uses semantic tags and ARIA labels (e.g., `aria-label`, `aria-required`) to support screen readers.

---

## 🛠️ Technologies Used

- **React.js** (Functional Components, Hooks: `useState`, `useReducer`, `useEffect`)
- **React Router** (For navigation between Home, Booking, and Confirmation pages)
- **CSS3** (Flexbox & Grid Layouts)
- **Jest & React Testing Library** (For Unit Testing)
- **Meta's Mock API** (Simulating backend data fetching)

---

## 📦 How to Install and Run

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/emreakturkk]