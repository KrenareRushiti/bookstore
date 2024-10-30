import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col md={6}>
                    <h4>KBOOK</h4>
                    <p>Postal Address: Oxford Street, London, no nr.</p>
                    <p>Email Address: Info@kbook.org</p>
                    <p>Phone number:  020 7946 0958.</p>
                </Col>
                <Col md={6}>
                    <p className='FTitle'> &copy; {new Date().getFullYear()} KBook. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;
