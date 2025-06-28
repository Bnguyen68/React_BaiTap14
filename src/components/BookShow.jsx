import { useState } from "react";
import BookEdit from "./BookEdit";
import { useBooks } from "../hooks/useBooks";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { removeBook, updateBook } = useBooks();

  const handleDelete = () => removeBook(book.id);
  const handleEditClick = () => setShowEdit(true);
  const handleSubmit = (id, newTitle) => {
    updateBook(id, newTitle);
    setShowEdit(false);
  };

  return (
    <div className="book-item">
      <img src={`https://picsum.photos/seed/${book.id}/200`} alt="book" />
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleSubmit} />
      ) : (
        <>
          <h3>{book.title}</h3>
          <button onClick={handleEditClick}>✏️</button>
          <button onClick={handleDelete}>❌</button>
        </>
      )}
    </div>
  );
}

export default BookShow;