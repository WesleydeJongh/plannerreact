import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// General
import './styles.css';

// Navigation bar
import './navBar/navBar.css';

// Day container
import './plannerBody/dayContainer.css'











// Deze root creert de complete site vanuit App.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

