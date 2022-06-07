import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Section1 = () => {
  return (
    <Container className="border border-danger opacity-75 mx-auto p-5">
      <Row>
        <Col lg={12}>
          <h1>
            GENUINE AUTO{" "}
            <span className="text-danger opacity-75">CAR PARTS</span>{" "}
          </h1>
          <p>we stock genuine car parts.</p>
          <p>Order online and get your delivered to your door step. </p>
          <button className="fs-1 bg-danger text-light border-0 rounded">
            CLICK HERE TO VISIT OUR PARTS SHOP
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Section1;
