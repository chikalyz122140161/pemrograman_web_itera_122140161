import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useLocalStorage from '../hooks/useLocalStorage';

function TestComponent() {
  const [val, setVal] = useLocalStorage('test-key', 'hello');
  return (
    <div>
      <span data-testid="value">{val}</span>
      <button onClick={() => setVal('world')}>change</button>
    </div>
  );
}

test('useLocalStorage sets and gets value', () => {
  // cleanup before test
  window.localStorage.removeItem('test-key');
  render(<TestComponent />);
  // initial value rendered from hook
  expect(screen.getByTestId('value').textContent).toBe('hello');

  // update via setter and confirm DOM + localStorage
  fireEvent.click(screen.getByText(/change/i));
  expect(screen.getByTestId('value').textContent).toBe('world');
  const item = JSON.parse(window.localStorage.getItem('test-key'));
  expect(item).toBe('world');
});
