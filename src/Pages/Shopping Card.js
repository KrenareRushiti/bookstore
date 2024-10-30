import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const ShoppingCard = ({ cart = [] }) => { 
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        console.log(cart); // Inspect the cart data to check prices
        const total = cart.reduce((acc, item) => {
            const price = parseFloat(item.price); // Ensure price is a number
            return acc + (isNaN(price) ? 0 : price); // Handle NaN case
        }, 0);
        setCalculation(total);
    }, [cart]);

    return (
        <div>
            <h2 className='shTitle'>Your shopping cart</h2>
                <hr className='hLine'/>
            {cart.length > 0 ? (
                <Container>
                    <Row className='mainRow'>
                        {/* Left side: List of selected items */}
                        <Col md={8}>
                            {cart.map((book) => (
                                <Card key={book.id} className='shCard'>
                                    <Row>
                                        <Col md={5}>
                                            <Card.Img className="cardImgTwo" src={book.img} alt='' />
                                        </Col>
                                        <Col md={7}>
                                            <Card.Body>
                                                <Card.Title>{book.title}</Card.Title>
                                                <Card.Text>{book.description}</Card.Text>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroup.Item>Author: {book.author}</ListGroup.Item>
                                                    <ListGroup.Item>Price: ${parseFloat(book.price).toFixed(2)}</ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            ))}
                        </Col>

                        {/* Right side: Final Order Summary */}
                        <Col md={4}>
                            <Card> 
                                <Card.Body className='finalOrder'>
                                    <Card.Title>Final Order</Card.Title>
                                    <Card.Text>
                                        <hr/>
                                        Total: ${calculation.toFixed(2)} {/* Ensure total is displayed with two decimal places */}
                                    </Card.Text>
                                        <div className='g-5'>
                                            <Button className="buttonTen">Continue with order</Button>
                                            <Button className="buttonEight" onClick={() => setCalculation(0)}>Cancel</Button>
                                        </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
}

export default ShoppingCard;
