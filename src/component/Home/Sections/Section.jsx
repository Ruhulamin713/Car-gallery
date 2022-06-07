import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Section = () => {
  return (
    <Container className="border bg-danger opacity-75 text-light my-2 rounded shadow">
      <Row>
        <Col className="p-5" lg={4}>
          <h3>About Card Gallery</h3>
          <p>
            Car gallery started it's journey 15 years ago.Our goal is to provide
            quality products to our customers and best service.All our staffs
            working all day provide better service.
          </p>
        </Col>
        <Col className="p-5 border-start border-end" lg={4}>
          <h3>Visit our showroom</h3>
          <p>
            342 NAYANAGAR, Cocacola Rd, <br /> Dhaka 1212
          </p>
        </Col>
        <Col className="p-5" lg={4}>
          <h3>Important links</h3>
          <p>
            <a href="#" className="text-white">
              Facebook Page
            </a>
          </p>
          <p>
            <a href="#" className="text-white">
              You Tube
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
