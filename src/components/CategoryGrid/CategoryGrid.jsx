import React from "react";
import styled from "styled-components";
import { CategoryCell } from "./CategoryCell";
import { categories } from "../../mocks";

const categoryCreator = () => {
  return categories.allIds.map((id) => {
    const category = categories.detailByCategoryId[id];

    return (
      <div key={category.id}>
        <CategoryCell
          id={category.id}
          imageUrl={category.imageUrl}
          name={category.name}
          description={category.description}
        />
      </div>
    );
  });
};

const CategoryGridView = ({ className }) => {
  return (
    <div className={"Container Container--fluid " + className}>
      <p className="u-text600">Categories </p>

      <div>{categoryCreator()}</div>
    </div>
  );
};

// TODO: use grid
export const CategoryGrid = styled(CategoryGridView)`
  > div {
    margin: 0;
    padding: 0;

    margin-left: -6px;
    margin-right: -6px;

    display: flex;
    justify-content: center;

    > div {
      margin: 6px;
    }
  }
`;
