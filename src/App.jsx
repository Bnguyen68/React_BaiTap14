import { useState, useEffect } from 'react';
import { fetchBooks } from './Api';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  // Lấy danh sách sách từ API khi component mount
  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    loadBooks();
  }, []);

  return (
    <div className="app-container">
      <h1>Book CRUD App</h1>
      <BookCreate books={books} setBooks={setBooks} />
      <BookList books={books} setBooks={setBooks} />
    </div>
  );
};

export default App;