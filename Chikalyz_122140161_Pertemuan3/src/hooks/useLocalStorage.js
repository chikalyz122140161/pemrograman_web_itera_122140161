import { useCallback, useEffect, useState } from 'react';

// Custom hook to wrap localStorage with serialized state and effect sync.
export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error('useLocalStorage read error', err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (err) {
      console.error('useLocalStorage write error', err);
    }
  }, [key, state]);

  const setLocalStorageState = useCallback((val) => {
    try {
      setState((prev) => (typeof val === 'function' ? val(prev) : val));
    } catch (err) {
      console.error('useLocalStorage set error', err);
    }
  }, []);

  return [state, setLocalStorageState];
}
