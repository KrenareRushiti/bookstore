import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import './My-sass.scss'


const Contact = () => {

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
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,  // Enable arrows
  };

  return (
    <>
      <Container>
        <div className="slider-container">
          <Slider {...settings}>
            {recommendedBooks.map((r) => (
              <div key={r.id}>
                <Card>
                  <Card.Img className="cardImg" variant="top" src={r.img} alt='' style={{ height: "200px" }} />
                  <Card.Body>
                    <Card.Title>{r.title}</Card.Title>
                    <Card.Text>{r.description}</Card.Text>
                    <Button variant="warning">Add to the card</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Contact;
