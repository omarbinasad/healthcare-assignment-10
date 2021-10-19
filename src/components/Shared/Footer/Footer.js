import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <ul className="menu">
          <li className="menu__item">
            <Nav.Link as={HashLink} to="/home#home">
              <p>Home</p>
            </Nav.Link>
          </li>
          <li class="menu__item">
            <Nav.Link as={HashLink} to="/about">
              <p>About Us</p>
            </Nav.Link>
          </li>
          <li className="menu__item">
            <Nav.Link as={HashLink} to="/home#services">
              <p>Services</p>
            </Nav.Link>
          </li>
          <li className="menu__item">
            <Nav.Link as={HashLink} to="/contact">
              <p>Contact</p>
            </Nav.Link>
          </li>
          <li class="menu__item">
            <Nav.Link as={HashLink} to="/login">
              <p>Login</p>
            </Nav.Link>
          </li>
        </ul>
        <p>&copy;2021 | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
