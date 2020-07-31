import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getCategories } from "../../utils/apis/category";
import { Pagination } from "../Pagination";
import { CategoryCell } from "./CategoryCell";

import { CATEGORIES_PER_PAGE } from "../../constants/settings";

const CategoryGridView = ({ className, currentPage }) => {
  const [categories, setCategories] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    getCategories(currentPage).then((data) => {
      setCategories(data.categories);
      setNumberOfPages(
        Math.ceil(data["total_categories"] / CATEGORIES_PER_PAGE)
      );
    });

    // TODO: handle error
  }, [currentPage]);

  const CategoryCells = categories.map((category) => (
    <div key={category.id}>
      <CategoryCell
        id={category.id}
        imageUrl={category.image_url}
        name={category.name}
        description={category.description}
      />
    </div>
  ));

  return (
    <div className={className}>
      <div>{CategoryCells}</div>

      <div className="u-textCenter">
        <Pagination
          currentPage={currentPage}
          totalNumberOfPages={numberOfPages}
          baseUrl={`/categories#page=`}
        />
      </div>
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
