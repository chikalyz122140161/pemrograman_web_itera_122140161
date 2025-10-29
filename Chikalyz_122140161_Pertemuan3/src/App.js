import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Stats from './pages/Stats';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <h1>My Bookshelf</h1>
          <nav>
            <Link to="/">Home</Link>
            {' | '}
            <Link to="/stats">Stats</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
