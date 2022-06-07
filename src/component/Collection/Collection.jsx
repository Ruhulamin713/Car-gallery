import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../fireBase.init";
import CardItem from "../Shared/Card/Card";

const Collection = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-crag-16124.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div className="mt-4">
      <h1>Top Collection</h1>
      <div className="mt-3">
        <Container>
          <Row className="gy-4">
            {inventory.map((data) => (
              <Col md={6} lg={4} key={data._id}>
                <CardItem data={data} />
              </Col>
            ))}
          </Row>
        </Container>
        <div>
          <Button
            className="bg-danger opacity-75 my-4"
            onClick={() => navigate("/manageitem")}
          >
            Manage Inventory
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
