import React, { useEffect, useState } from 'react';
import { useBooks } from '../../context/BookContext';

// Reusable form used for adding and editing books
export default function BookForm({ editBook = null, onFinish }) {
  const { addBook, updateBook, books } = useBooks();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('own');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (editBook) {
      setTitle(editBook.title);
      setAuthor(editBook.author);
      setStatus(editBook.status);
    }
  }, [editBook]);

  const reset = () => {
    setTitle('');
    setAuthor('');
    setStatus('own');
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation + error handling
    if (!title.trim() || !author.trim()) {
      setError('Title and Author are required.');
      return;
    }

    // Prevent duplicate based on title+author
    const duplicate = books.some((b) => b.title === title.trim() && b.author === author.trim() && b.id !== (editBook && editBook.id));
    if (duplicate) {
      setError('This book already exists in your list.');
      return;
    }

    const payload = { title: title.trim(), author: author.trim(), status };

    try {
      if (editBook) updateBook(editBook.id, payload);
      else addBook(payload);
      reset();
      if (onFinish) onFinish();
    } catch (err) {
      setError('An unexpected error occurred.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      {error && <div role="alert" className="error">{error}</div>}
      <div>
        <label htmlFor="title-input">Title</label>
        <input id="title-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter book title" />
      </div>
      <div>
        <label htmlFor="author-input">Author</label>
        <input id="author-input" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author" />
      </div>
      <div>
        <label htmlFor="status-select">Status</label>
        <select id="status-select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="own">Own</option>
          <option value="reading">Reading</option>
          <option value="buy">Want to buy</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit">{editBook ? 'Save' : 'Add Book'}</button>
        <button type="button" onClick={reset}>Clear</button>
      </div>
    </form>
  );
}

