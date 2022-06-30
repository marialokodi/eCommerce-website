import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCategories from "./ProductCategories";
import { Form, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  let navigate = useNavigate();
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
            onClick={(event) => EditProducts(event, product.id)}
            variant="primary"
            type="submit"
          >
            CHANGE
          </Button>
        </Form>
      </div>
    );
  };

  const EditProducts = async (event, id) => {
    event.preventDefault();
    let img1 = product.img1;
    let img2 = product.img2;
    let name = product.name;
    let material = product.material;
    let category = product.category;
    let price = product.price;
    let stock = product.stock;
    let description = product.description;

    const url =
      "https://e-commerce-5e3a0-default-rtdb.europe-west1.firebasedatabase.app/products/";
    let urlIdx = url + id;
    let response = await fetch(urlIdx + ".json", {
      method: "PATCH",
      body: JSON.stringify({
        img1: img1,
        img2: img2,
        name: name,
        material: material,
        category: category,
        price: price,
        stock: stock,
        description: description,
        id: id,
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

export default EditProduct;
