import { useState } from 'react';
import BookEdit from './BookEdit';
import { deleteBook } from '../Api';

const BookShow = ({ book, setBooks }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteBook = async () => {
    await deleteBook(book.id);
    setBooks(prevBooks => prevBooks.filter(b => b.id !== book.id));
  };

  const onEdit = (id, title) => {
    setBooks(prevBooks => prevBooks.map(b => b.id === id ? { ...b, title } : b));
    setShowEdit(false);
  };

  const imageUrl = `https://picsum.photos/seed/${book.id}/150/150`;
  const fallbackUrl = 'https://via.placeholder.com/150x150.png?text=Image+Not+Found';

  return (
    <div className="book-show">
      <img
        src={imageUrl}
        alt="Book cover"
        className="book-image"
        onError={(e) => {
          e.target.src = fallbackUrl;
        }}
      />
      <div className="book-content">
        {showEdit ? (
          <BookEdit book={book} onEdit={onEdit} setShowEdit={setShowEdit} />
        ) : (
          <div>
            <h3>{book.title}</h3>
            <div className="button-group">
              <button onClick={() => setShowEdit(true)} className="edit-button">
                Edit
              </button>
              <button onClick={handleDeleteBook} className="delete-button">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookShow;