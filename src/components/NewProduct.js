import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCategories from "./ProductCategories";
import { Form, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  let navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      const url = `https://e-commerce-5e3a0-default-rtdb.europe-west1.firebasedatabase.app/products/`;
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

    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Image 1</Form.Label>
            <Form.Control
              type="text"
              defaultValue={product.img1}
              name="img1change"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Image 2</Form.Label>
            <Form.Control
              type="text"
              defaultValue={product.img2}
              name="img2change"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Product name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={product.name}
              name="namechange"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Material</Form.Label>
            <Form.Control
              type="text"
              defaultValue={product.material}
              name="materialchange"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              defaultValue={product.category}
              name="categorychange"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              defaultValue={product.price}
              name="pricechange"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicStock">
            <Form.Label>On stock</Form.Label>
            <Form.Control
              type="number"
              defaultValue={product.stock}
              name="stockchange"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDetails">
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={product.description}
              name="detailschange"
            />
          </Form.Group>
          <Button
            onClick={(event) => AddProducts(event)}
            variant="primary"
            type="submit"
          >
            CHANGE
          </Button>
        </Form>
      </div>
    );
  };

  const AddProducts = async (event) => {
    event.preventDefault();
    let img1 = document.querySelector("[name='img1change']").value;
    let img2 = document.querySelector("[name='img2change']").value;
    let name = document.querySelector("[name='namechange']").value;
    let material = document.querySelector("[name='materialchange']").value;
    let category = document.querySelector("[name='categorychange']").value;
    let price = document.querySelector("[name='pricechange']").value;
    let stock = document.querySelector("[name='stockchange']").value;
    let description = document.querySelector("[name='detailschange']").value;

    const url =
      "https://e-commerce-5e3a0-default-rtdb.europe-west1.firebasedatabase.app/products/";

    let response = await fetch(url + "/" + product.length + ".json", {
      method: "PUT",
      body: JSON.stringify({
        img1: img1,
        img2: img2,
        name: name,
        material: material,
        category: category,
        price: price,
        stock: stock,
        description: description,
        id: product.length,
      }),
    });
    await response.json();
    navigate("/admin");
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

export default NewProduct;
