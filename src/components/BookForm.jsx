import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ onBookAdded }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author || !description) {
      alert('All fields are required!');
      return;
    }

    const newBook = { title, author, description };
    try {
      const response = await axios.post('https://book-backend-yh1g.onrender.com/books', newBook);
      onBookAdded(response.data);
      setTitle('');
      setAuthor('');
      setDescription('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 p-2 mr-4"
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-2 mr-4"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mr-4"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;