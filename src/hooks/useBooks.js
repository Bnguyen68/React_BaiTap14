import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const useBooks = () => {
  return useContext(BookContext);
};