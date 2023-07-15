import React from "react";
import { CardGroup } from "react-bootstrap";
import Category from "../../component/category/Category";

export default function Categories() {
  const categoryList = [
    { categoryItem: "Books", offer: 10 },
    { categoryItem: "Fruites", offer: 10 },
    { categoryItem: "Vagitables", offer: 10 },
  ];
  return (
    <>
      <CardGroup>
        {categoryList.map((category, index) => {
          return <Category category={category} />;
        })}
      </CardGroup>
    </>
  );
}
