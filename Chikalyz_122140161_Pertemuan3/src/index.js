import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BookProvider } from './context/BookContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </React.StrictMode>
);
