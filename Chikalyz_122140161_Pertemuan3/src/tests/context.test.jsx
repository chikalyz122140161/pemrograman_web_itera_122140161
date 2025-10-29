import React from 'react';
import { render, screen } from '@testing-library/react';
import { BookProvider, useBooks } from '../context/BookContext';

function ConsumerComponent() {
  const { books } = useBooks();
  return <div data-testid="count">{books.length}</div>;
}

test('context provides books array', () => {
  render(
    <BookProvider>
      <ConsumerComponent />
    </BookProvider>
  );
  expect(screen.getByTestId('count')).toBeInTheDocument();
});
