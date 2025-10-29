import React, { useMemo, useState } from 'react';
import { useBooks } from '../../context/BookContext';
import BookForm from '../BookForm/BookForm';

// Reusable BookList component that supports search, edit, delete and filter
export default function BookList({ filterStatus = 'all', search = '' }) {
  const { books, deleteBook } = useBooks();
  const [editingId, setEditingId] = useState(null);

  const filtered = useMemo(() => {
    let arr = books;
    if (filterStatus !== 'all') arr = arr.filter((b) => b.status === filterStatus);
    if (search.trim()) {
      const q = search.toLowerCase();
      arr = arr.filter((b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
    }
    return arr;
  }, [books, filterStatus, search]);

  return (
    <div className="book-list">
      {filtered.length === 0 && <p>No books found.</p>}
      {filtered.map((b) => (
        <div key={b.id} className="book-item">
          {editingId === b.id ? (
            <BookForm editBook={b} onFinish={() => setEditingId(null)} />
          ) : (
            <>
              <div className="meta">
                <strong>{b.title}</strong>
                <div className="author">by {b.author}</div>
                <div className="status">Status: {b.status}</div>
              </div>
              <div className="actions">
                <button onClick={() => setEditingId(b.id)}>Edit</button>
                <button onClick={() => deleteBook(b.id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
