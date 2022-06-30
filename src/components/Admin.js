import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import NewProduct from "./NewProduct";

const Admin = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      if (componentMounted) {
        componentMounted = false;
        setLoading(true);
        const url =
          "https://e-commerce-5e3a0-default-rtdb.europe-west1.firebasedatabase.app/products/";
        const result = await fetch(url + ".json");
        let obj = await result.json();

        //let arr = Object.entries(obj).map(([id, val]) => ({ id, ...val }));
        setData(obj);
        setFilter(obj);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="row row-cols-1 row-cols-md-1 px-5 ">
        <div>
          <Skeleton height={100} />
        </div>
        <div>
          <Skeleton height={100} />
        </div>
        <div>
          <Skeleton height={100} />
        </div>
      </div>
    );
  };

  const Delete = async (event, index) => {
    const url =
      "https://e-commerce-5e3a0-default-rtdb.europe-west1.firebasedatabase.app/products/";
    let urlIdx = url + index;
    let response = await fetch(urlIdx + ".json", {
      method: "DELETE",
    });
    filter.splice(index, 1);
    setFilter([...filter]);
  };

  const ShowProducts = () => {
    return (
      <div>
        <NavLink as={Link} to={`/admin/new`}>
          <Button className="d-flex justify-content-end align-items-end">
            +
          </Button>
        </NavLink>

        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filter
              .filter((product) => product !== null)
              .map((product, index) => {
                return (
                  <tr key={product.id} className="align-middle ">
                    <td className="my-auto">{index + 1}</td>
                    <td className="d-flex flex-row align-items-center">
                      <div>
                        <img
                          src={product.img1}
                          alt="product img"
                          className="adminImg"
                        />
                      </div>
                      <NavLink as={Link} to={`/admin/edit/${product.id}`}>
                        <div>{product.name}</div>
                      </NavLink>
                    </td>
                    <td className="">
                      <div>{product.price}</div>
                    </td>
                    <td className="align-self-center">
                      <div>{product.stock}</div>
                    </td>
                    <td className="align-self-center">
                      <Button onClick={(event) => Delete(event, product.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
