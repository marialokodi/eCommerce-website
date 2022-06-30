import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { NavLink, Link } from "react-router-dom";

const Cart = () => {
  const [empty, setEmpty] = useState(false);
  const [data, setData] = useState([]);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = () => {
      if (componentMounted) {
        componentMounted = false;

        let cart = localStorage.getItem("cart");
        if (cart === null) {
          cart = [];
        } else {
          cart = JSON.parse(cart);
        }

        setData(cart);
      }
    };
    getProducts();
  }, []);

  const EmptyCart = () => {
    setEmpty(true);
    return <div height={500}>Nu ai inca niciun produs in cart</div>;
  };

  const ShowTotal = (data) => {
    let total = 0;
    for (let f of data) {
      total += f.price * f.quantity;
    }
    console.log(total);
    return total;
  };

  const ShowProducts = () => {
    return (
      <div>
        {data.map((product) => {
          return (
            <div className="d-flex justify-content-lg-between my-4 mx-5 ">
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
                <button onClick={(event) => MinusProduct(event, product)}>
                  -
                </button>
                <input
                  className="quantityCart"
                  defaultValue={product.quantity}
                  idProdus={product.id}
                ></input>
                <button onClick={(event) => PlusProduct(event, product)}>
                  +
                </button>
              </div>
              <div>{product.quantity * product.price} $</div>
              <div>
                <Button
                  variant="outline-secondary"
                  onClick={() => DeleteItem(product)}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
        {() => {
          return ShowTotal;
        }}
      </div>
    );
  };

  const MinusProduct = async (event, product) => {
    console.log(document.querySelector('[idProdus="' + product.id + '"]'));
    let quantity = document.querySelector('[idProdus="' + product.id + '"]')
      .value;

    quantity = Number(quantity);
    quantity--;

    document.querySelector('[idProdus="' + product.id + '"]').value = quantity;

    console.log(quantity, product);
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
        p.quantity = quantity;
        found = true;
      }
    }
    if (!found) {
      cart.push({ ...produs, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const PlusProduct = async (event, product) => {
    console.log(document.querySelector('[idProdus="' + product.id + '"]'));
    let quantity = document.querySelector('[idProdus="' + product.id + '"]')
      .value;

    quantity = Number(quantity);
    quantity++;

    document.querySelector('[idProdus="' + product.id + '"]').value = quantity;

    console.log(quantity, product);
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
        p.quantity = quantity;
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

  const TotalPrice = () => {
    return (
      <div>
        <div>Total price</div>
        <div>x $</div>
      </div>
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-lg-between my-4 mx-5 ">
        <NavLink as={Link} to="/products/all">
          <Button variant="outline-secondary">Go back to shopping</Button>
        </NavLink>
        <div>Your Shopping Cart</div>
        <Button variant="secondary">Procede to checkout</Button>
      </div>
      <div>
        <div className="row justify-content-center">
          {empty ? <EmptyCart /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
