import { useState } from 'react';
import { addBook } from '../Api';

const BookCreate = ({ books, setBooks }) => {
  const [title, setTitle] = useState('');

  const handleAddBook = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newBook = await addBook(title);
      setBooks([...books, newBook]);
      setTitle('');
    }
  };

  return (
    <div className="book-create">
      <h2>Add New Book</h2>
      <div className="form-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
          className="input-field"
        />
        <button onClick={handleAddBook} className="add-button">
          Add Book
        </button>
      </div>
    </div>
  );
};

export default BookCreate;