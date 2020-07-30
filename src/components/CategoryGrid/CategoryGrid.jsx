import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CategoryCell } from "./CategoryCell";
import { categories } from "../../mocks";
import { useHashParams } from "../../utils/hooks";
import { getCategories } from "../../utils/apis/category";

const CategoryGridView = ({ className }) => {
  const hashParams = useHashParams();
  const page = hashParams.getPage();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(page).then((data) => {
      setCategories(data.categories);
    });

    // TODO: handle error
  }, [page]);

  const CategoryCellList = categories.map((category) => (
    <div key={category.id}>
      <CategoryCell
        id={category.id}
        image_url={category.image_url}
        name={category.name}
        description={category.description}
      />
    </div>
  ));

  return (
    <div className={"Container Container--fluid " + className}>
      <p className="u-text600">Categories </p>

      <div>{CategoryCellList}</div>
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
