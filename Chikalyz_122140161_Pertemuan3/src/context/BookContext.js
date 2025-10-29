import React, { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const BookContext = createContext();

export function useBooks() {
  return useContext(BookContext);
}

export function BookProvider({ children }) {
  // useLocalStorage custom hook persists 'books' to localStorage
  const [storedBooks, setStoredBooks] = useLocalStorage('books', []);
  const [books, setBooks] = useState(storedBooks || []);

  useEffect(() => {
    // Sync local state with storedBooks when component mounts
    setBooks(storedBooks || []);
  }, []);

  useEffect(() => {
    // Persist any books changes to localStorage
    setStoredBooks(books);
  }, [books, setStoredBooks]);

  // CRUD operations
  const addBook = (book) => {
    setBooks((prev) => [...prev, { id: Date.now().toString(), ...book }]);
  };

  const updateBook = (id, updated) => {
    setBooks((prev) => prev.map((b) => (b.id === id ? { ...b, ...updated } : b)));
  };

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const value = {
    books,
    addBook,
    updateBook,
    deleteBook,
    setBooks
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}
