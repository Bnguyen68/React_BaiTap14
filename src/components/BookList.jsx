import BookShow from "./BookShow";
import { useBooks } from "../hooks/useBooks";

function BookList() {
  const { books } = useBooks();

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;