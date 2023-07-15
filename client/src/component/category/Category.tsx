import React from "react";
import { Button, Card } from "react-bootstrap";
import "../../assets/style/category.css";
interface Props {
  category: { categoryItem: string; offer: number };
}

export default function Category(props: Props) {
  const { category } = props;
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{category.categoryItem}</Card.Title>
          <Card.Img
            className="category-img"
            variant="top"
            src={require(`../../assets/images/${category.categoryItem}.jpg`)}
          />
          <Card.Text>{category.offer}% offor</Card.Text>
          <Button variant="primary">View all</Button>
        </Card.Body>
      </Card>
    </>
  );
}
