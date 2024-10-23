import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function Home() {
    {/*const books = [
        {
            id: 1,
            img: "https://m.media-amazon.com/images/S/articles-assets-prod/titleImages/02fa8ee2-6cec-4b2d-99db-7a5d0d8ba282._QL60_FP_.jpg",

        },
        {
            id: 2, 
            img: "https://m.media-amazon.com/images/S/articles-assets-prod/titleImages/d7a4b736-7cda-4939-951c-88dad1527878._QL60_FP_.jpg",
           
        },
        {
            id: 3,
            img: "https://d1ysvut1l4lkly.cloudfront.net/B0DJ9RWGHQ/3/image-0-0.jpg",
           
        }
    ]; */}

    const recommendedBooks = [
        {
            id: 4,
            title: "Code Dependent: Living in the Shadow of AI",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1706043061i/127282778.jpg",
        },
        {
            id: 5,
            title: "The Unicorn Project",
            img: "https://m.media-amazon.com/images/I/91eMffFefqL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
            id: 6,
            title: "The Chaos Machine",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632076475i/58950736.jpg",
        },
        {
            id: 7,
            title: "The Anxious Generation",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1711573377i/171681821.jpg",
        },
    ];

    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle the search input
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter recommended books based on the search query
    const filteredBooks = recommendedBooks.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Container>
                <div className='Home'> 
                    <Stack direction="horizontal" gap={3} className="my-3">
                        <Form.Control 
                            className="me-auto" 
                            placeholder="Discover your next favorite book..." 
                            value={searchQuery}
                            onChange={handleSearch} // Update search query on change
                        />
                        <Button className="secondary">Search</Button>
                        <div className="vr" />
                        <Button className="outline-danger" onClick={() => setSearchQuery('')}>Reset</Button>
                    </Stack>    
                    {/* Always display recommended books */}
                    <p className='demo' style={{
                        textAlign: "center", 
                        marginTop: "20px", 
                        marginBottom: "20px",
                        fontSize: "2.5rem",  
                        color: "dark", 
                        letterSpacing: "1.5px",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                        fontFamily: "cursive"
                    }}>
                        {searchQuery ? "Search Results" : "Recommended Books"}
                    </p>

    <Row xs={1} md={2} className='g-4'>
      {(searchQuery ? filteredBooks : recommendedBooks).map((r) => (
        <Col key={r.id}>
          <Card>
             <Row>
                    {/* Kolona për imazhin në anën e majtë */}
                <Col md={6}>
                  <Card.Img className="cardImg" src={r.img} alt='' style={{height: "300px", width: "width: 160px", objectFit: "cover"}}/>
                </Col>
                    {/* Kolona për përmbajtjen në anën e djathtë */}
                <Col>
                        <Card.Title>{r.title}</Card.Title>
                        
                        <Button variant="warning">Add to the card</Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
              ))}
            </Row>
            </div>
          </Container>
        </>
    );
}

export default Home;
