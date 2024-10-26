import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';


function Home({addtoCart}) {
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
        {
          id: 8,
          title: "Code Dependent: Living in the Shadow of AI",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1706043061i/127282778.jpg",
      },
        {
          id: 9,
          title: "1984",
          img: "https://m.media-amazon.com/images/I/61f1ytOB-QL._SY522_.jpg",
      },
      {
        id: 10,
        title: "Animal Farm",
        img: "https://m.media-amazon.com/images/I/71je3-DsQEL._AC_UY327_FMwebp_QL65_.jpg",
      },
      {
      id: 11,
      title: "The power of habit",
      img: "https://m.media-amazon.com/images/I/51u6LIbFoML._AC_UY327_FMwebp_QL65_.jpg",
      },
      {
      id: 12,
      title: "War",
      img: "https://m.media-amazon.com/images/I/61ZRi-MxTLL._SY522_.jpg",
      },
      {
        id: 13,
        title: "The 48 Laws of Power",
        img: "https://m.media-amazon.com/images/I/611X8GI7hpL._SY522_.jpg",
      },
      {
        id: 14,
        title: "Fahrenheit 451",
        img: "https://m.media-amazon.com/images/I/61l8LHt4MeL._SY522_.jpg",
      },
      {
        id: 15,
        title: "The Idiot",
        img: "https://m.media-amazon.com/images/I/81GpBL+tl0L._SY522_.jpg",
      },
      {
        id: 16,
        title: "Crime and Punishment",
        img: "https://m.media-amazon.com/images/I/51Vg24nKbPL._SY522_.jpg",
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
      {(searchQuery ? filteredBooks : recommendedBooks).map((book) => (
        <Col key={book.id}>
          <Card>
             <Row>
                    {/* Kolona për imazhin në anën e majtë */}
                <Col md={4}>
                  <Card.Img className="cardImg" src={book.img} alt=''/>
                </Col>
                    {/* Kolona për përmbajtjen në anën e djathtë */}
                <Col className='cardTitle'>
                        <Card.Title>{book.title}</Card.Title> 
                        <Button onClick={() => addtoCart(book)}>Add to Cart</Button>
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
