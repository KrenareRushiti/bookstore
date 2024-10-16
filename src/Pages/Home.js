import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from './components/ExampleCarouselImage.js'; 
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
//import 'My-sass.scss';

function Home() {
    const books = [
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
      ]; 

      const recommendedBooks = [
        {
            id: 4,
            title: "Code Dependent: Living in the Shadow of AI",
            description: "A riveting story of what it means to be human in a world changed by artificial intelligence, revealing the perils and inequities of our growing reliance on automated decision-making",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1706043061i/127282778.jpg",
        },
        {
            id: 5,
            title: "The Unicorn Project",
            description: "The Age of Software is here, and another mass extinction event looms—this is a story about rebel developers and business leaders working together, racing against time to innovate, and thrive in a time of unprecedented uncertainty",
            img: "https://m.media-amazon.com/images/I/91eMffFefqL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
            id: 6,
            title: "The Chaos Machine",
            description: "From a New York Times investigative reporter and Pulitzer Prize finalist, “an essential book for our times” (Ezra Klein), tracking the high-stakes inside story of how Big Tech’s breakneck race to drive engagement",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632076475i/58950736.jpg",
        },
        {
            id: 7,
            title: "Code Dependent: Living in the Shadow of AI",
            description: "In The Anxious Generation, social psychologist Jonathan Haidt lays out the facts about the epidemic of teen mental illness that hit many countries at the same time",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1711573377i/171681821.jpg",
        },
      ]


      return (
        <>
        <div className="Home">
          <h1 className='title'>Shyhrete</h1>
<h1 className='title' style={{
                textAlign: "center", 
                marginTop: "20px", 
                marginBottom: "20px",
                fontSize: "2.5rem",  
                color: "gray", 
                letterSpacing: "1.5px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                fontFamily: "cursive"
                
            }}>
                Discover Your Next Favorite Book:
            </h1>

      <Carousel>
          {books.map((b) =>
                 (
                  <CarouselItem key={b.id}>
                    <img src= {b.img} alt ='' className = "carouselimg"/>
                      <Carousel.Caption>
                        <p className = "carouselDescription"> {b.description} </p>
                      </Carousel.Caption>
                  </CarouselItem>
                ))}
          
      </Carousel>
    

      <p className='demo' style={{
                textAlign: "center", 
                marginTop: "20px", 
                marginBottom: "20px",
                fontSize: "2.5rem",  
                color: "dark", 
                letterSpacing: "1.5px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                fontFamily: "cursive"
                
            }}>Recommended books</p>

      <Row xs={1} md={4} className="g-4">
      {recommendedBooks.map((r, idx) => (
        <Col key={r.id}>
          <Card>
            <Card.Img className = "cardImg" variant="top" src={r.img} alt='' style={{height: "200px"}}/>
            <Card.Body>
              <Card.Title>{r.title}</Card.Title>
              <Card.Text>
                {r.description}
              </Card.Text>
              <Button variant="warning">Add to the card</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    
    </div>

    </>
    );
} 
    


export default Home;
