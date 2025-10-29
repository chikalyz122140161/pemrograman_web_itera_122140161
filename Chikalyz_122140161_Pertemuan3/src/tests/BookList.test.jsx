import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BookProvider } from '../context/BookContext';
import BookForm from '../components/BookForm/BookForm';
import BookList from '../components/BookList/BookList';

test('add book and appears in list', () => {
  render(
    <BookProvider>
      <BookForm />
      <BookList />
    </BookProvider>
  );

  fireEvent.change(screen.getByPlaceholderText(/Enter book title/i), { target: { value: 'Test Title' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter author/i), { target: { value: 'Author' } });
  fireEvent.click(screen.getByText(/Add Book/i));

  expect(screen.getByText(/Test Title/)).toBeInTheDocument();
  expect(screen.getByText(/by Author/)).toBeInTheDocument();
});
