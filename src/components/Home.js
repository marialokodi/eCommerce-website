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
            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-5e3a0.appspot.com/o/background3.jpg?alt=media&token=2a4e46c3-46a8-477e-9439-a2ec7307c781"
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
            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-5e3a0.appspot.com/o/background2.jpg?alt=media&token=8d3fe3dd-68d9-411a-b8f9-4af740935f31"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-5e3a0.appspot.com/o/background3.jpg?alt=media&token=2a4e46c3-46a8-477e-9439-a2ec7307c781"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ProductCategories></ProductCategories>
    </div>
  );
};

export default Home;
