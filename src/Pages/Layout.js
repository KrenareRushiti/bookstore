import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';



function Layout() {
 
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3 color: dark">
        <Container>
          <Navbar.Brand href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BheNWI0fPvzESg59gYVAXbK4P4tevdaB4lkS_zvdLty8foWUmuTx34IgLSGs6FVJRGA&usqp=CAU" width={60} alt='' />
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
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Categories">
                  <Nav.Link>Categories</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/quotes">
                  <Nav.Link>Quotes</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/aboutus">
                  <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/ShoppingCard">
                  <Nav.Link>My <img src='https://www.iconexperience.com/_img/g_collection_png/standard/48x48/shopping_cart.png' className='A-logo' width={30}/></Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Outlet />
  </>
  )
}
export default Layout;
