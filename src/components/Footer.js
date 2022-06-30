import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialPinterest,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="py-2">
        <div className="container-fluid padding">
          <div className="row text-start">
            <div className="col-md-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                fill="#006D77"
              >
                <g>
                  <path d="M989.2,319.7c-0.7-1.7-1.6-3.4-2.5-5L850.9,86.8L744.6,319.7H989.2z M317.5,319.7h362.7L498.8,63L317.5,319.7z M461.5,51.6h-256c-10,0-20.8,3.6-29.9,9.5l109.6,240.1L461.5,51.6z M823.3,58.1c-7.9-4.1-16.6-6.5-24.8-6.5H536.1l176.3,249.6L823.3,58.1z M307.2,356.7l191.1,591.6c0.4,0.1,0.9,0.1,1.3,0.1l190.8-591.7H307.2z M149.5,93L17.4,314.7c-1,1.7-2,3.4-3,5h238.5L149.5,93z M10,356.7l1.1,1.9h2c2.2,2.7,5.2,6.4,8.9,11l419.4,522.9L268.3,356.7H10z M990,356.7H729.3L552,906.7l430.9-537.2C985.9,365.7,988.3,361.4,990,356.7z" />
                </g>
              </svg>
              <h4>Contact</h4>
              <p>
                <strong>Phone:</strong> +40744444444
              </p>
              <p>
                <strong>E-mail:</strong> office@sample.com
              </p>
              <p>
                <strong>Adress:</strong> City, State, 000000
              </p>
            </div>
            <div className="col-md-5">
              <h4>Usefull links</h4>
              <div className="row">
                <div className="col">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/cart">
                    Cart
                  </Nav.Link>
                  <Nav.Link as={Link} to="/favorites">
                    Favorites
                  </Nav.Link>
                  <Nav.Link as={Link} to="/products/:category">
                    Products
                  </Nav.Link>
                </div>
                <div className="col">
                  <Nav.Link as={Link} to="/products/:category">
                    Ring
                  </Nav.Link>
                  <Nav.Link as={Link} to="/products/:category">
                    Necklace
                  </Nav.Link>
                  <Nav.Link as={Link} to="/products/:category">
                    Bracelet
                  </Nav.Link>
                  <Nav.Link as={Link} to="/products/:category">
                    Earring
                  </Nav.Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Our hours</h4>

              <p>Monday: 9am - 5pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: closed</p>
              <div className="follow">
                <h4>Follow us</h4>
                <div className="icons">
                  <TiSocialFacebook></TiSocialFacebook>
                  <TiSocialTwitter></TiSocialTwitter>
                  <TiSocialInstagram></TiSocialInstagram>
                  <TiSocialPinterest></TiSocialPinterest>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
