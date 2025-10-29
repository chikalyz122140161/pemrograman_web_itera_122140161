import React, { useState } from 'react';
import BookForm from '../components/BookForm/BookForm';
import BookList from '../components/BookList/BookList';
import BookFilter from '../components/BookFilter/BookFilter';

export default function Home() {
  const [status, setStatus] = useState('all');
  const [search, setSearch] = useState('');

  return (
    <div className="page home-page">
      <section className="left">
        <h2>Add a book</h2>
        <BookForm />
      </section>

      <section className="right">
        <h2>My books</h2>
        <BookFilter status={status} onChange={setStatus} search={search} onSearch={setSearch} />
        <BookList filterStatus={status} search={search} />
      </section>
    </div>
  );
}
