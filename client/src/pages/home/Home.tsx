import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../component/footer/Footer";
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
        <Row>
          <Footer/>
        </Row>
      </Container>
    </>
  );
}
