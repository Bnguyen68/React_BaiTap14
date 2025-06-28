import axios from 'axios';

const baseUrl = 'http://localhost:3001/books';

export const fetchBooks = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const createBook = async (title) => {
  const response = await axios.post(baseUrl, { title });
  return response.data;
};

export const deleteBookById = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export const editBookById = async (id, newTitle) => {
  const response = await axios.put(`${baseUrl}/${id}`, { title: newTitle });
  return response.data;
};