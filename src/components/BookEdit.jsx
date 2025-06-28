import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Save</button>
    </form>
  );
}

export default BookEdit;