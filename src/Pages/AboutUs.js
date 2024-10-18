import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Carousel } from 'react-bootstrap';

const AboutUs = () => {
  const [books, setBooks] = useState([]);

  const getApiData = async () => {
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/public/books");
      const data = await response.json();
      setBooks(data.data.data); // Ensure the correct path based on the API response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Container>
      <Row>
        {books && books.map((book) => (
          <Col key={book.id} sm={12} md={6} lg={4}>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Img variant="top" src={book.coverImageUrl} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Author: {book.author}</li>
                <li className="list-group-item">Published: {book.publicationDate}</li>
              </ul>
              <Card.Body>
                <Card.Link href={book.moreInfoUrl}>More Info</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutUs;
