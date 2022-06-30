import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Button, Carousel, Accordion } from "react-bootstrap";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      const url = `https://e-commerce-5e3a0-default-rtdb.europe-west1.firebasedatabase.app/products/${id}/`;
      const result = await fetch(url + ".json");

      setProduct(await result.json());
      setLoading(false);
    };

    getProduct();
  }, ["hello"]);

  const Loading = () => {
    return (
      <div className="row justify-content-center p-4">
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    if (product === null) {
      return;
    }
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <div className="row gx-5 gy-4">
        <Carousel className="col" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={product.img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={product.img2}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="col">
          <h2 className="text-uppercase ">{product.name}</h2>
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating
            <i className="fa fa-star"></i>
          </p>
          <div className="lead">
            <div>On stock: {product.stock}</div>
          </div>
          <h3 className="display-6 fw-bold my-4">{product.price} $</h3>
          <div className="d-flex flex-row justify-content-end align-items-center my-4">
            <input className="m-4" type="number" name="quantity"></input>
            <div>
              <Button
                className="mx-2"
                onClick={(event) => AddToCart(event, product)}
                variant="outline-dark"
              >
                ADD TO CART
              </Button>
              <Button
                onClick={(event) => AddToFav(event, product)}
                variant="outline-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </Button>
            </div>
          </div>
          <Accordion className="w-100 py-2" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="border-bottom">
                Details & Description
              </Accordion.Header>
              <Accordion.Body className="acordion">
                {product.description}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
  };

  const AddToCart = (event, product) => {
    let quantity = document.querySelector("[name='quantity']").value;
    quantity = Number(quantity);
    if (isNaN(quantity) || quantity <= 0) {
      document.querySelector("[name='quantity']").classList.add("invalid");
      alert("Nu e quantitya buna");
      return;
    }
    let produs = product;

    let cart = localStorage.getItem("cart");
    if (cart === null) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    let found = false;
    for (let p of cart) {
      if (p.id === produs.id) {
        p.quantity += produs.quantity;
        found = true;
      }
    }
    if (!found) {
      cart.push({ ...produs, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const AddToFav = (event, product) => {
    let produs = product;

    let fav = localStorage.getItem("fav");
    if (fav === null) {
      fav = [];
    } else {
      fav = JSON.parse(fav);
    }

    fav.push(produs);

    localStorage.setItem("fav", JSON.stringify(fav));
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Detail;
