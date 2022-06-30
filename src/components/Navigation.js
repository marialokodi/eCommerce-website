import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar sticky="top" bg="light" expand="lg">
        <Navbar.Brand className="column d-flex justify-content-center align-items-center px-2 ">
          <svg
            width="32"
            height="32"
            viewBox="0 0 1000 1000"
            enableBackground="new 0 0 1000 1000"
            fill="#006D77"
          >
            <g>
              <path d="M989.2,319.7c-0.7-1.7-1.6-3.4-2.5-5L850.9,86.8L744.6,319.7H989.2z M317.5,319.7h362.7L498.8,63L317.5,319.7z M461.5,51.6h-256c-10,0-20.8,3.6-29.9,9.5l109.6,240.1L461.5,51.6z M823.3,58.1c-7.9-4.1-16.6-6.5-24.8-6.5H536.1l176.3,249.6L823.3,58.1z M307.2,356.7l191.1,591.6c0.4,0.1,0.9,0.1,1.3,0.1l190.8-591.7H307.2z M149.5,93L17.4,314.7c-1,1.7-2,3.4-3,5h238.5L149.5,93z M10,356.7l1.1,1.9h2c2.2,2.7,5.2,6.4,8.9,11l419.4,522.9L268.3,356.7H10z M990,356.7H729.3L552,906.7l430.9-537.2C985.9,365.7,988.3,361.4,990,356.7z" />
            </g>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/">
              SHINE
            </Nav.Link>
            <NavDropdown title="Products">
              <NavDropdown.Item as={Link} to="/products/all">
                All
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/:category">
                Ring
              </NavDropdown.Item>
              <NavDropdown.Item href="#products/necklance">
                Necklace
              </NavDropdown.Item>
              <NavDropdown.Item href="#products/bracelet">
                Bracelet
              </NavDropdown.Item>
              <NavDropdown.Item href="#products/earring">
                Earring
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about-us">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link as={Link} to="/admin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fillRule="currentColor"
            className="bi bi-person"
            viewBox="0 0 20 20"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
        </Nav.Link>
        <Nav.Link as={Link} to="/favorites">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-heart text-black"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </Nav.Link>
        <Nav.Link as={Link} to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fillRule="currentColor"
            className="bi bi-cart2"
            viewBox="0 0 20 20"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
        </Nav.Link>
      </Navbar>
    </div>
  );
};

export default Navigation;
