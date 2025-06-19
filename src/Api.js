import axios from 'axios';

const API_URL = 'http://localhost:3001/books';

export const fetchBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addBook = async (title) => {
  const response = await axios.post(API_URL, { title });
  return response.data;
};

export const editBook = async (id, title) => {
  const response = await axios.put(`${API_URL}/${id}`, { title });
  return response.data;
};

export const deleteBook = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};