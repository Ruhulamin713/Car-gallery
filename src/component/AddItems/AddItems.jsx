import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const AddItems = () => {
  const emailRef = useRef("");
  const nameRef = useRef("");
  const priceRef = useRef(0);
  const quantityRef = useRef(0);
  const supplierRef = useRef("");
  const descriptionRef = useRef("");
  const imageRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let name = nameRef.current.value;
    let price = +priceRef.current.value;
    let quantity = +quantityRef.current.value;
    let supplier = supplierRef.current.value;
    let description = descriptionRef.current.value;
    let image = imageRef.current.value;
    let product = {
      image,
      email,
      name,
      price,
      quantity,
      supplier,
      description,
    };
    const Url = "https://sleepy-crag-16124.herokuapp.com/product";
    fetch(Url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("Item Added");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="mt-5 pt-4 w-50 mx-auto">
      <h2>Add items</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="name@example.com"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Product name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="price">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            ref={priceRef}
            type="number"
            placeholder="Enter Product Price"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="quantity">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            ref={quantityRef}
            type="number"
            placeholder="Enter Product Quantity"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="supplier">
          <Form.Label>Supplier</Form.Label>
          <Form.Control
            ref={supplierRef}
            type="text"
            placeholder="Enter Supplier"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="description">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            ref={descriptionRef}
            type="text"
            placeholder="Enter Product Description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="image">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            ref={imageRef}
            type="url"
            placeholder="Enter url"
            required
          />
        </Form.Group>
        <Form.Control
          type="submit"
          s
          value="Submit"
          className="bg-danger opacity-75 text-light"
        />
      </Form>
      <ToastContainer />
    </div>
  );
};

export default AddItems;
