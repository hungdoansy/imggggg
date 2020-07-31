import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { Pagination } from "../Pagination";
import { CategoryCell } from "./CategoryCell";

import { selectors } from "../../reducers";
import { fetchCategories } from "../../actions/category";

const CategoryGridView = ({ className, currentPage }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => {
    console.log(state.category);
    // debugger;
    const get = selectors.getCategoriesByPageNumber(state, currentPage);
    debugger;
    console.log("get", get);

    return get;
  });

  console.log("currentPage", currentPage);
  console.log("categories", categories);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories(currentPage));
    }

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

      <div className="paginator u-textCenter">
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
  margin-top: 50px;

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

  > div.paginator {
    margin-top: 20px;
  }
`;
