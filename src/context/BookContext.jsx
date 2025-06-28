import { createContext, useState, useEffect } from "react";
import {
  fetchBooks,
  createBook,
  deleteBookById,
  editBookById
} from "../api/bookApi";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    loadBooks();
  }, []);

  const addBook = async (title) => {
    const newBook = await createBook(title);
    setBooks((prev) => [...prev, newBook]);
  };

  const removeBook = async (id) => {
    await deleteBookById(id);
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const updateBook = async (id, newTitle) => {
    const updatedBook = await editBookById(id, newTitle);
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, ...updatedBook } : book
      )
    );
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, updateBook }}>
      {children}
    </BookContext.Provider>
  );
}