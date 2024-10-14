import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';



function Layout() {
 
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3 color: dark">
        <Container>
          <Navbar.Brand href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BheNWI0fPvzESg59gYVAXbK4P4tevdaB4lkS_zvdLty8foWUmuTx34IgLSGs6FVJRGA&usqp=CAU" width={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 color-black">
              <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Categories">
                  <Nav.Link>Categories</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/quotes">
                  <Nav.Link>Quotes</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Authors" id="offcanvasNavbarDropdown-expand-lg">
                  <NavDropdown.Item href="#action3">Alexandre Dumas</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Alexis Karpouzos</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Franz Kafka</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Bella Johnson</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Fyodor Dostoevsky</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">George Orwell</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">George Eliot</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder=""
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-warning">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Outlet />
  </>
  )
}
export default Layout;
