// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importing global styles

// Create the root of the React app and render the main <App /> component
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);