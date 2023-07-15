import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import "../../assets/style/category.css";
interface Props {
  category: { categoryItem: string; offer: number };
}

export default function Category(props: Props) {
  const { category } = props;
  return (
    <>
      <Card className="category-card">
        <Card.Body>
          <Card.Title>{category.categoryItem}</Card.Title>
          <Card.Img
            className="category-img"
            variant="top"
            src={require(`../../assets/images/${category.categoryItem}.jpg`)}
          />
          <Row>
            <Col>
              <Card.Text>{category.offer}% offor</Card.Text>
            </Col>
            <Col>
              <Button variant="primary" className="custom-btn">
                View all
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
