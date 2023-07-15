import React from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "./Banner";
import Categories from "./Categories";

export default function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Banner />
        </Row>
        <Row className="mt-3">
          <Categories />
        </Row>
      </Container>
    </>
  );
}
