import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCategories = () => {
  return (
    <div className="row justify-content-center row-cols-1 row-cols-md-4 g-4 mx-2 my-5">
      <Card className="border-0 text-white h-50">
        <Card.Img
          src="img/ring.jpg"
          alt="Card image"
          className="overflow-hidden"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="py-5">RING</Card.Title>
          <Button variant="outline-light">SHOP NOW</Button>
        </Card.ImgOverlay>
      </Card>
      <Card className="border-0 text-white h-50">
        <Card.Img
          src="img/necklace.jpg"
          alt="Card image"
          className="overflow-hidden"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="py-5">NECKLACE</Card.Title>
          <Button variant="outline-light">SHOP NOW</Button>
        </Card.ImgOverlay>
      </Card>
      <Card className="border-0 text-white h-50">
        <Card.Img
          src="img/bracelet.jpg"
          alt="Card image"
          className="overflow-hidden"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="py-5">BRACELET</Card.Title>
          <Button variant="outline-light">SHOP NOW</Button>
        </Card.ImgOverlay>
      </Card>
      <Card className="border-0 text-white h-50">
        <Card.Img
          src="img/earring.jpg"
          alt="Card image"
          className="overflow-hidden"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="py-5">EARRING</Card.Title>
          <Button variant="outline-light">SHOP NOW</Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default ProductCategories;
