import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://book-backend-yh1g.onrender.com/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleBookAdded = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleBookDeleted = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 ">Book Listing</h1>
      <BookForm onBookAdded={handleBookAdded} />
      <BookList books={books} onBookDeleted={handleBookDeleted} />
    </div>
  );
};

export default App;