import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from './components/ExampleCarouselImage.js'; 
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
//import 'My-sass.scss';
import Input from './input.js';

function Home() {
   {/* const books = [
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
      ]*/}

      const [term, setTerm] = useState('Anything');
      const {data:books,isLoading,error}=UseFetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=${import.meta.env.VITE_SOME_VALUE}`)
    

      return (
        <>
        <Container>
         <div className='Home'>
            
             Stack for the Search Functionality 
            <Stack direction="horizontal" gap={3} className="my-3">
                <Form.Control className="me-auto" placeholder="Discover your next favorite book..." />
                <Button variant="secondary">Search</Button>
                <div className="vr" />
                <Button variant="outline-danger">Reset</Button>
            </Stack> 
            
            <Navbar />
				<div className='header'>
					<div className='overlay'>
						<h2 className='Heading-text'>Books on {term}</h2>

						<p className='text-md mb-4 px-2 lg:px-0'>
							“Reading is an act of civilization; it’s one of the greatest acts
							of civilization because it takes the free raw material of the mind
							and builds castles of possibilities.”
						</p>

						<input searchBooks={(search) => setTerm(search)} />
					</div>
				</div>
				<div>
					{isLoading && (
						<div className='flex items-center justify-center mt-6 lg:mt-20'>
							<Circles
								height='50'
								width='50'
								color='brown'
								ariaLabel='circles-loading'
								wrapperStyle={{}}
								wrapperClass=''
								visible={true}
							/>
						</div>
					)}
				</div>

				<div className='max-w-7xl mx-auto'>
					{!isLoading && <BookList books={books} />}
				</div>
				{error && (
					<div className='text-center md:text-2xl font-mono font-bold mt-3'>
						{error}
					</div>
				)}     
     
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
      {recommendedBooks.map((r) => (
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
    </Container>
    </>
    );
} 
export default Home;
