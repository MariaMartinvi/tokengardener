// filepath: c:\Users\Tiendeo\tokengardener\src\index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './jsxFiles/App'; // Adjust the path to your App.jsx file
import './index.css'; // Optional: Import global styles if you have them

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);