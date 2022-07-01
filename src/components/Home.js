import React from "react";
import { Carousel, Button } from "react-bootstrap";
import ProductCategories from "./ProductCategories";
const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="public/img/background3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Button variant="outline-light">Primary</Button>{" "}
            <Button variant="primary">Primary</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="public/img/background2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="public/img/background3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ProductCategories></ProductCategories>
    </div>
  );
};

export default Home;
