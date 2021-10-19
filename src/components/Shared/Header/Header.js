import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand Link as={HashLink} to="/home#home">
            <h2>Aqua Health Care</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              <h5>Home</h5>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/about">
              <h5>About Us</h5>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              <h5>Services</h5>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/contact">
              <h5>Contact Us</h5>
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} variant="secondary">
                Log Out
              </Button>
            ) : (
              <Button className="border shadow" variant="white">
                <Nav.Link as={HashLink} to="/login">
                  <h5>Login</h5>
                </Nav.Link>
              </Button>
            )}
            <Navbar.Text>
              <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
