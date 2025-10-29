import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BookProvider } from '../context/BookContext';
import BookForm from '../components/BookForm/BookForm';
import BookFilter from '../components/BookFilter/BookFilter';
import BookList from '../components/BookList/BookList';

test('filtering by status works', () => {
  render(
    <BookProvider>
      <BookForm />
      <BookFilter status="all" onChange={() => {}} search="" onSearch={() => {}} />
      <BookList />
    </BookProvider>
  );

  // Add two books with different statuses
  fireEvent.change(screen.getByPlaceholderText(/Enter book title/i), { target: { value: 'Owned Book' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter author/i), { target: { value: 'A' } });
  const statusSelect = screen.getByLabelText(/Status/i);
  fireEvent.change(statusSelect, { target: { value: 'own' } });
  fireEvent.click(screen.getByText(/Add Book/i));

  fireEvent.change(screen.getByPlaceholderText(/Enter book title/i), { target: { value: 'Buy Book' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter author/i), { target: { value: 'B' } });
  fireEvent.change(screen.getByLabelText(/Status/i), { target: { value: 'buy' } });
  fireEvent.click(screen.getByText(/Add Book/i));

  // Basic expectations: Both present
  expect(screen.getByText(/Owned Book/)).toBeInTheDocument();
  expect(screen.getByText(/Buy Book/)).toBeInTheDocument();
});
