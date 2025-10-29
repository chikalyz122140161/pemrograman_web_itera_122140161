import { useMemo } from 'react';
import { useBooks } from '../context/BookContext';

// Custom hook that computes stats about books (counts per status)
export default function useBookStats() {
  const { books } = useBooks();

  const stats = useMemo(() => {
    const counts = { own: 0, reading: 0, buy: 0 };
    for (const b of books) {
      const s = b.status || 'buy';
      if (s === 'own') counts.own++;
      else if (s === 'reading') counts.reading++;
      else counts.buy++;
    }
    return { total: books.length, ...counts };
  }, [books]);

  return stats;
}
