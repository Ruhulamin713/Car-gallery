import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Inventory = (e) => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  let changedQuantity;
  // get the item
  const url = `https://sleepy-crag-16124.herokuapp.com/products/${productId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [changedQuantity]);
  let { img, name, price, quantity, supplier, description } = product;

  //update the product

  const deliverItems = () => {
    if (quantity === 0) {
      return;
    }
    quantity -= 1;
    updateProduct(quantity);
  };

  const reStockRef = useRef();
  const reStockItem = (e) => {
    e.preventDefault();
    const reStockAmount = +reStockRef.current.value;
    quantity += reStockAmount;
    updateProduct(quantity);
    reStockRef.current.value = "";
  };

  // function to update quantity
  const updateProduct = (value) => {
    const updateProduct = { quantity };
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="mt-5 pt-5 ps-3">
      <h2 className="mb-5">{name}</h2>
      <div className="d-flex flex-sm-column flex-md-row">
        <div className="w-50 mx-auto">
          <img src={img} className="card-img-top" alt="..." />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price:{price}</li>
            <li className="list-group-item">Quantity:{quantity}</li>
            <li className="list-group-item">Supplier:{supplier}</li>
            <li className="list-group-item">{description}</li>
          </ul>
        </div>
        <div className="w-100 mt-4 pt-3">
          <Form onSubmit={reStockItem} className="w-50 mt-4 mx-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-3 fw">Restock Item</Form.Label>
              <Form.Control
                ref={reStockRef}
                type="number"
                placeholder="Enter Desired Amount "
                required
                autoComplete="off"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Restock Item
            </Button>
          </Form>
          <Button
            className="w-50 mt-4"
            variant="primary"
            onClick={deliverItems}
          >
            Delivered
          </Button>
        </div>
      </div>
      <Button
        className="my-4"
        onClick={() => {
          navigate("/manageitem");
        }}
      >
        Manage Inventory
      </Button>
    </div>
  );
};

export default Inventory;
