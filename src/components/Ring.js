import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

import { NavLink } from "react-bootstrap";

const Ring = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      if (componentMounted) {
        componentMounted = false;

        const url =
          "https://e-commerce-5e3a0-default-rtdb.europe-west1.firebasedatabase.app/products/";
        const result = await fetch(url + ".json");

        setData(await result.clone().json());
        setFilter(await result.json());
      }
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="row row-cols-1 row-cols-md-4 g-5 ">
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
      </div>
    );
  };

  const FilterProduct = (cat) => {
    const list = data.filter((x) => {
      if (x === null) {
        return;
      }
      return x.category === cat;
    });
    setFilter(list);
  };

  const ShowProducts = () => {
    return (
      <div>
        <div
          onLoad={() => FilterProduct("ring")}
          className="row row-cols-1 row-cols-md-3 g-4"
        >
          {filter
            .filter((product) => product !== null)
            .map((product) => {
              return (
                <Card
                  className="text-center border-0 m-3 p-0"
                  style={{ width: "18rem" }}
                  key={product.id}
                >
                  <NavLink
                    className="p-0"
                    as={Link}
                    to={`/products/all/${product.id}`}
                  >
                    <Card.Img
                      variant="top"
                      src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/23580/original/0_BlockRing_V_Hero.jpg?1645028890"
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.price} $</Card.Text>
                    </Card.Body>
                  </NavLink>
                  <Card.Body className="d-flex justify-content-lg-around mb-4 pb-2">
                    <Button
                      variant="outline-dark"
                      onClick={(event) => AddToFav(event, product)}
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
                    <Button
                      variant="primary"
                      onClick={(event) => AddToCart(event, product)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fillRule="currentColor"
                        className="bi bi-cart2 text-light"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                      </svg>
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </div>
    );
  };

  const AddToCart = (event, product) => {
    let produs = product;

    let cart = localStorage.getItem("cart");
    if (cart === null) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }

    cart.push(produs);

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
      <div className="container my-5 py-0">
        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
    </div>
  );
};

export default Ring;
