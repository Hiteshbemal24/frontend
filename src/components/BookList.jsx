import React from 'react';
import axios from 'axios';

const BookList = ({ books, onBookDeleted }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://book-backend-yh1g.onrender.com/books/${id}`);
      onBookDeleted(id);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <ul>
      {books.map((book) => (
        <li key={book._id} className="flex justify-between items-center border p-2 mb-2">
          <div>
            <h3 className="font-bold">{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.description}</p>
          </div>
          <button
            onClick={() => handleDelete(book._id)}
            className="bg-red-500 text-white p-1"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;