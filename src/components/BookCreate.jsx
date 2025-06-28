import { useState } from "react";
import { useBooks } from "../hooks/useBooks";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { addBook } = useBooks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addBook(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}

export default BookCreate;