import { Carousel, Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Contact = () => {
    const [quotes, setQuotes] = useState([]);

    const getApiData = async () => {
        try {
            const response = await fetch("https://api.freeapi.app/api/v1/public/quotes");
            const data = await response.json();
            console.log("API Data:", data); // Check API response structure
            setQuotes(data.data.data); // Accessing quotes array directly
        } catch (error) {
            console.error("Error fetching API data", error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    const groupedQuotes = [];
    const itemsPerSlide = 3; // Number of cards per slide

    for (let i = 0; i < quotes.length; i += itemsPerSlide) {
        groupedQuotes.push(quotes.slice(i, i + itemsPerSlide));
    }

    return (
        <>
            <Container>
                <Carousel>
                    {
                        groupedQuotes.map((group, idx) => (
                            <Carousel.Item key={idx}>
                                <Row className="justify-content-center">
                                    {
                                        group.map((d) => (
                                            <Col sm={12} md={6} lg={4} key={d.id}>
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Placeholder image" />
                                                    <Card.Body>
                                                        <Card.Title>{d.quote}</Card.Title>
                                                        <Card.Text>
                                                            <strong>- {d.author}</strong>
                                                        </Card.Text>
                                                        <Button variant="primary">Read more</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Carousel.Item>
                        ))
                    }

                    {/* Carousel Navigation Controls */}
                    <Carousel.Prev>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </Carousel.Prev>
                    
                    <Carousel.Next>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </Carousel.Next>
                </Carousel>
            </Container>
        </>
    );
};

export default Contact;
