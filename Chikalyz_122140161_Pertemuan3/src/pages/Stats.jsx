import React from 'react';
import useBookStats from '../hooks/useBookStats';

export default function Stats() {
  const stats = useBookStats();
  return (
    <div className="page stats-page">
      <h2>Stats</h2>
      <ul>
        <li>Total books: {stats.total}</li>
        <li>Owned: {stats.own}</li>
        <li>Reading: {stats.reading}</li>
        <li>Want to buy: {stats.buy}</li>
      </ul>
    </div>
  );
}
