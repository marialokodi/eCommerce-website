import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { NavLink, Link } from "react-router-dom";

const Fav = () => {
  const [empty, setEmpty] = useState(false);
  const [data, setData] = useState([]);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = () => {
      if (componentMounted) {
        componentMounted = false;

        let fav = localStorage.getItem("fav");
        if (fav === null) {
          fav = [];
        } else {
          fav = JSON.parse(fav);
        }
        console.log(fav);
        setData(fav);
      }
    };
    getProducts();
  }, []);

  const Emptyfav = () => {
    setEmpty(true);
    return <div height={500}>Nu ai inca niciun produs in cos</div>;
  };

  const ShowProducts = () => {
    return (
      <div>
        {data.map((product) => {
          return (
            <div>
              <div className="d-flex justify-content-lg-between my-4 mx-5 align-items-center">
                <div>
                  <img
                    src={product.img1}
                    alt="product img"
                    className="adminImg"
                  />
                </div>
                <div>
                  <div>{product.name}</div>
                  <div>Details</div>
                </div>
                <div>{product.price} $</div>
                <div>
                  <Button
                    variant="outline-secondary"
                    className="mx-4"
                    onClick={(event) => AddToCart(event, product)}
                  >
                    Add to cart
                  </Button>

                  <Button
                    variant="outline-danger"
                    onClick={(event) => DeleteItem(product)}
                  >
                    X
                  </Button>
                </div>
              </div>
              <hr className="mx-3"></hr>
            </div>
          );
        })}
        <div></div>
      </div>
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-lg-between my-4 mx-5 align-middle">
        <NavLink as={Link} to="/products/all">
          <Button variant="outline-secondary">Go back to shopping</Button>
        </NavLink>
        <h2>Your Favortites</h2>
        <NavLink as={Link} to="/products/all">
          <Button variant="secondary">Go to cart</Button>
        </NavLink>
      </div>
      <div>
        <div className="row justify-content-center">
          {empty ? <Emptyfav /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

const AddToCart = (event, product) => {
  let quantity = 1;

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

function DeleteItem(product) {
  let cart = localStorage.getItem("cart");
  if (cart === null) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }
  for (let i = 0; i < cart.length; i++) {
    let p = cart[i];
    if (product.id === p.id) {
      cart.splice(i, 1);
      break;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  data.splice(product, 1);
  setData([...data]);
}

export default Fav;
