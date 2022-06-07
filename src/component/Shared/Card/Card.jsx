import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const CardItem = (props) => {
  const { _id, name, img, price, quantity, supplier, description } =
    props?.data;
  const navigate = useNavigate();

  return (
    <>
      <Card className="h-100 shadow-lg border-1 border-danger cardItem">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Price: ${price}</ListGroup.Item>
            <ListGroup.Item>Quantity: {quantity}</ListGroup.Item>
            <ListGroup.Item>Supplier: {supplier}</ListGroup.Item>
            <ListGroup.Item>Description: {description}</ListGroup.Item>
          </ListGroup>
          <Button
            variant="danger opacity-75"
            onClick={() => navigate(`/inventory/${_id}`)}
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardItem;
