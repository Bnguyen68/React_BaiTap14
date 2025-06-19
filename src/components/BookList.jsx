import BookShow from './BookShow';

const BookList = ({ books, setBooks }) => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      <div className="book-grid">
        {books.map(book => (
          <BookShow key={book.id} book={book} setBooks={setBooks} />
        ))}
      </div>
    </div>
  );
};

export default BookList;