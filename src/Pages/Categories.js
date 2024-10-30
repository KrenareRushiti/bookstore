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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "orange", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "orange", borderRadius: "50%"}}
        onClick={onClick}
      />
    );
  }


const Categories = ({addtoCart}) => {

    
  const Technology = [
    {
        id: 4,
        title: "IRREPLACEABLE",
        Author: "Pascal Bornet ",
        description: "Discover techniques to boost your career using AI without losing your job",
        img: "https://m.media-amazon.com/images/I/71Sk19m140L._SY522_.jpg",
        price: "9.99",
    },
    {
        id: 5,
        title: "Why Machines Learn",
        Author: " Anil Ananthaswamy",
        description: "Explanation of the mathematics that has brought machine learning",
        img: "https://m.media-amazon.com/images/I/81ZtMfYNTeL._SY522_.jpg",
        price: "8.99",
    },
    {
        id: 6,
        title: "Modern Software Engineering",
        Author: "David Farley",
        description: "It helps you create better software, faster...",
        img: "https://m.media-amazon.com/images/I/81T-gUuACHL._SX385_.jpg",
        price: "13.99",
    },
    {
        id: 7,
        title: "The Full Stack Developer",
        Author: "Chris Northwood",
        description: "Stay in control as systems grow more complex.",
        img: "https://isbncoverdb.com/images/book-cover-the-full-stack-developer.webp",
        price: "5.99",
    },
    {
        id: 8,
        title: "Character Limit",
        Author: "Kate Conger",
        description:"offers a telling lesson in the cost of getting everything you want.",
        img: "https://m.media-amazon.com/images/I/81wKyq40uDL._SX385_.jpg",
        price: "10.99",
    },
    {
        id: 9,
        title: "Hackers",
        Author: "Steven Levy",
        description: "is a fascinating story that begins in early computer research labs",
        img: "https://m.media-amazon.com/images/I/81wvlKDm8oL._SX385_.jpg",
        price: "12.99",
    },
  ];


  const Biography = [
    {
        id: 4,
        title: "Something Lost, Something Gained",
        Author: "Hillary Clinton",
        description: "She shares the latest chapter of her inspiring life and shows us how to age with grace and keep moving forward",
        img: "https://m.media-amazon.com/images/I/71NyArECPdL._SY522_.jpg",
    },
    {
        id: 5,
        title: "The Art of Power",
        Author: "Nancy Pelosi",
        description: "The most powerful woman in American political history tells the story of her transformation from housewife to House Speaker",
        img: "https://m.media-amazon.com/images/I/81A+OwVDHEL._SY522_.jpg",
    },
    {
        id: 6,
        title: "How Politics Works",
        Author: "DK",
        description:"Explaining political ideas on a conceptual level, entries explore how they apply to governments, movements, throughout history along with 21st-century examples",
        img: "https://m.media-amazon.com/images/I/719ifGBqH-L._SY522_.jpg",
    },
    {
        id: 7,
        title: "Learning to Disagree",
        Author: "John D. Inazu",
        description: "Reveals the surprising path to learning how to disagree in ways that build new bridges with our neighbors, coworkers, loved ones, and help us find better ways ",
        img: "https://m.media-amazon.com/images/I/71BSWSXC7AL._SY522_.jpg",
    },
    {
        id: 8,
        title: "Confident Pluralism",
        Author: "John D. Inazu",
        description: "Offers a refreshing argument for how the legal system can protect peoples’ personal beliefs and differences and provides a path forward",
        img:"https://m.media-amazon.com/images/I/71int6iYO2L._SY522_.jpg",
    }, 
    {
        id: 9,
        title: "The Politics of Ministry",
        Author: "Bob Burns and Co",
        description: "Sets out wise principles and practices that help us see more clearly the political dynamics at play in our ministries.",
        img: "https://m.media-amazon.com/images/I/8143Hy9x-QL._SY522_.jpg",
    },
  ];

  const selfHelp = [
    {
        id: 4,
        title: "How To Live An Extraordinary Life",
        Author: " Anthony Pompliano",
        description: "What does it take to live an extraordinary life? The answers will surprise you",
        img: "https://m.media-amazon.com/images/I/71Vi0MCoTzL._SY522_.jpg",
    },
    {
        id: 5,
        title: "Atomic Habits",
        Author: " James Clear",
        description: "If you're having trouble changing your habits, the problem isn't you. The problem is your system",
        img: "https://m.media-amazon.com/images/I/81ANaVZk5LL._SY522_.jpg",
    },
    {
        id: 6,
        title: "The Great Mental Models",
        Author: "Shane Parrish",
        description:"Simplifying more than twenty-four key concepts from these technical fields",
        img: "https://m.media-amazon.com/images/I/71D9RnEU3aL._SY522_.jpg",
    },
    {
        id: 7,
        title: "Clear Thinking",
        Author: "Shane Parrish",
        description: "gives you the tools to recognize the moments that have the potential to transform your trajectory",
        img: "https://m.media-amazon.com/images/I/81hmO-IVMjL._SY522_.jpg",
    },
    {
        id: 8,
        title: "The Safety Anarchist",
        Author: "Sidney Dekker",
        description: "It is time for Safety Anarchists: people who trust people more than process",
        img:"https://m.media-amazon.com/images/I/61eycfxnasL._SY522_.jpg",
    }, 
    {
        id: 9,
        title: "PeopleWork",
        Author: " Kevin Burns",
        description: "Author He lays out the practical, how-to steps that frontline supervisors and safety people can master",
        img: "https://m.media-amazon.com/images/I/61h7EVnFXbL._SY522_.jpg",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };

  return (
    <>
      <Container>
      <h1 className='titleTwo' style={{
            textAlign: "center", 
            marginTop: "20px", 
            marginBottom: "20px",
            fontSize: "2.5rem",  
            color: "black", 
            letterSpacing: "2px",
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.4)",
            fontFamily: "'Times New Roman', serif",
            background: "linear-gradient(45deg, rgb(255, 239, 204), rgb(255, 250, 230))",
            padding: "20px",
            borderRadius: "15px", // Rounded corners
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Add shadow for depth
            animation: "pulse 2s infinite" // Pulse animation
        }}>
    Computers & Technology
</h1>
            <div className="Card">
            <div className="slider-container">
                <Slider {...settings}>
                    {Technology.map((book) => (
                        <div key={book.id}>
                            <Card>
                                <Card.Img className="cardImg" variant="top" src={book.img} alt='' style={{ height: "350px", alignContent: "center" }} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text className='card.author'>{book.Author}</Card.Text>
                                    <Card.Text className='card.text'>{book.description}</Card.Text>
                                    <Button className = "buttonOne" onClick={() => addtoCart(book)}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        ))}
                </Slider>
            </div>
        </div>
        <h1 className='titleTwo' style={{
                textAlign: "center", 
                marginTop: "40px", 
                marginBottom: "40px",
                fontSize: "2.5rem",  
                color: "black", 
                letterSpacing: "2px",
                textShadow: "3px 3px 6px rgba(0, 0, 0, 0.4)",
                fontFamily: "'Times New Roman', serif",
                background: "linear-gradient(45deg, rgb(255, 239, 204), rgb(255, 250, 230))",
                padding: "20px",
                borderRadius: "15px", // Rounded corners
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                animation: "pulse 2s infinite" // Pulse animation
}}>
    Politics & Social Sciences
</h1>
            <div className="Card">
            <div className="slider-container">
                <Slider {...settings}>
                    {Biography.map((book) => (
                        <div key={book.id}>
                            <Card>
                                <Card.Img className="cardImg" variant="top" src={book.img} alt='' style={{ height: "300px", alignContent: "center" }} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text className='card.author'>{book.Author}</Card.Text>
                                    <Card.Text className='card.text'>{book.description}</Card.Text>
                                    <Button className = "buttonTwo" onClick={() => addtoCart(book)}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        ))}
                </Slider>
            </div>
        </div>
        <h1 className='titleTwo' style={{
                textAlign: "center", 
                marginTop: "40px", 
                marginBottom: "40px",
                fontSize: "2.5rem",  
                color: "black", 
                letterSpacing: "2px",
                textShadow: "3px 3px 6px rgba(0, 0, 0, 0.4)",
                fontFamily: "'Times New Roman', serif",
                background: "linear-gradient(45deg, rgb(255, 239, 204), rgb(255, 250, 230))",
                padding: "20px",
                borderRadius: "15px", // Rounded corners
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                animation: "pulse 2s infinite" // Pulse animation
}}>
    Self-help
</h1>
            <div className="Card">
            <div className="slider-container">
                <Slider {...settings}>
                    {selfHelp.map((book) => (
                        <div key={book.id}>
                            <Card>
                                <Card.Img className="cardImg" variant="top" src={book.img} alt='' style={{ height: "300px", alignContent: "center" }} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text className='card.author'>{book.Author}</Card.Text>
                                    <Card.Text className='card.text'>{book.description}</Card.Text>
                                    <Button className= "buttonThree" onClick={() => addtoCart(book)}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        ))}
                </Slider>
            </div>
        </div>
      </Container>
    </>
  );
};

export default Categories;
