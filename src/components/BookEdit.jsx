import { useState } from 'react';
import { editBook } from '../Api';

const BookEdit = ({ book, onEdit, setShowEdit }) => {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleEditBook = async (e) => {
    e.preventDefault();
    if (newTitle.trim()) {
      const updatedBook = await editBook(book.id, newTitle);
      onEdit(book.id, updatedBook.title);
    }
  };

  return (
    <div className="book-edit">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="input-field"
      />
      <div className="button-group">
        <button onClick={handleEditBook} className="save-button">
          Save
        </button>
        <button onClick={() => setShowEdit(false)} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookEdit;