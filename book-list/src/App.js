import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript')
      .then(res => {
        setBooks(res.data.items);
      });
  }, []);

  return (
    <ListGroup>
      {books.map(book => (
        <ListGroup.Item key={book.id}>{book.volumeInfo.title}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Books;
