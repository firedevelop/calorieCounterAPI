<div align="center">
  <a href="README.es.md">Español</a> | <a href="README.md">English</a>
</div>

<div align="center">
  <img src="./public/logo.svg" alt="Logo Calorie Counter" width="150" />
  <h1 align="center">Calorie Counter</h1>
</div>

<p align="center">
  A modern web application to keep a daily log of calories consumed and burned.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  <a href="https://calorie-counter-api-usereducer.netlify.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Preview-28B2A8?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Preview" />
  </a>
</p>

## 📸 Screenshot

![Calorie Counter Screenshot](./public/screen-1.png)

## 📝 Project Description

**Calorie Counter** is a responsive web application that allows users to track their caloric intake and energy expenditure through exercise. The application automatically calculates the net calorie balance, providing a clear overview of daily progress.

The application's state is managed efficiently and robustly using React's `useReducer` and `useContext` hooks, ensuring a predictable and scalable data flow. Additionally, data is saved to the browser's `localStorage` to persist the user's session, enhancing the user experience.

## ✨ Key Features

- **Activity Logging:** Add meals and exercises with their respective calories.
- **Real-Time Calculation:** Instantly view consumed calories, burned calories, and the net balance.
- **Edit and Delete:** Modify or remove any entry with a single click.
- **Data Persistence:** Information is saved in `localStorage` so you don't lose your progress when closing the browser.
- **Easy Reset:** Option to clear all data and start fresh.
- **Responsive Design:** Fully adaptive interface for mobile and desktop devices, built with Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** React with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks (`useReducer`, `useContext`)
- **Icons:** Heroicons
- **Unique IDs:** `uuid`

## 🛠️ Installation and Setup

Follow these steps to run the project in your local environment:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/firedevelop/calorieCounterAPI.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd calorieCounterAPI
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or the port indicated by Vite).


## 📄 Credits

- Made with ❤️ by [fireDevelop](https://github.com/fireDevelop).
- Background images by [Sven Mieke](https://unsplash.com/@sxoxm), [Anna Pelzer](https://unsplash.com/@annapelzer), and [Edgar Chaparro](https://unsplash.com/@echaparro) on Unsplash.
- Logo by [freepik](https://www.freepik.com/free-vector/fitness-center-logo-design-template_35897801.htm#fromView=keyword&page=1&position=19&uuid=bd785584-eadb-4377-aaf0-1e9f224df9d0).
- Powered by [Nutritionix](https://www.nutritionix.com/).

## 🆔 Project ID
id0000569
