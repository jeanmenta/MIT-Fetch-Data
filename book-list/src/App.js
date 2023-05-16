import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Card, Container, Row, Col } from 'react-bootstrap';
import './App.css';


function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript')
      .then(res => {
        setBooks(res.data.items);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
        <div className="container">
    <div className="scrollable-box">
          <ListGroup>
            {books.map(book => (
              <ListGroup.Item key={book.id} className="mb-3">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title className="book-title">{book.volumeInfo.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted book-authors">{book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}</Card.Subtitle>
                    <Card.Text className="book-published">
                      Published: {book.volumeInfo.publishedDate}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
          </div>
  </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
