import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BookProvider } from '../context/BookContext';
import BookForm from '../components/BookForm/BookForm';

test('shows validation error when fields empty', () => {
  render(
    <BookProvider>
      <BookForm />
    </BookProvider>
  );

  fireEvent.click(screen.getByText(/Add Book/i));
  expect(screen.getByRole('alert')).toHaveTextContent(/Title and Author are required/);
});
