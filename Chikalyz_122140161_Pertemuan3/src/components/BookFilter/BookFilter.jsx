import React from 'react';

// Small reusable filter component
export default function BookFilter({ status, onChange, search, onSearch }) {
  return (
    <div className="book-filter">
      <div>
        <label>Filter</label>
        <select value={status} onChange={(e) => onChange(e.target.value)}>
          <option value="all">All</option>
          <option value="own">Own</option>
          <option value="reading">Reading</option>
          <option value="buy">Want to buy</option>
        </select>
      </div>
      <div>
        <label>Search</label>
        <input value={search} onChange={(e) => onSearch(e.target.value)} placeholder="Search by title or author" />
      </div>
    </div>
  );
}
