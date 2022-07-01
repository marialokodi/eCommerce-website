import React from "react";
import { Carousel, Button } from "react-bootstrap";
import ProductCategories from "./ProductCategories";
import { background } from "public/img/background.jpg";
import { background2 } from "public/img/background2.jpg";
import { background3 } from "public/img/background3.jpg";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={background} alt="First slide" />
          <Carousel.Caption>
            <Button variant="outline-light">Primary</Button>{" "}
            <Button variant="primary">Primary</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={background2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={background3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ProductCategories></ProductCategories>
    </div>
  );
};

export default Home;
