import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Pagination from "../../../common/Pagination";
import CategoryCell from "./components/CategoryCell";

import { selectors } from "../../../../reducers";
import { fetchCategories } from "../../../../actions/category";

const CategoryGridView = ({ className, currentPage }) => {
  // TODO: fix re-render too many times
  const dispatch = useDispatch();
  const categories = useSelector((state) =>
    selectors.getCategoriesByPageNumber(state, currentPage)
  );

  console.log("currentPage", currentPage);
  console.log("categories", categories);

  const totalPages = useSelector(selectors.getTotalNumberOfRemotePages);

  useEffect(() => {
    console.log("fetch whenever it's mounted");
    dispatch(fetchCategories(currentPage));

    // TODO: handle error
  }, [currentPage, dispatch]);

  const CategoryCells = categories.map((category) => (
    <div key={category.id}>
      <CategoryCell
        id={category.id}
        imageUrl={category.imageUrl}
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
          totalNumberOfPages={totalPages}
          baseUrl={`/categories#page=`}
        />
      </div>
    </div>
  );
};

// TODO: use grid
export default styled(CategoryGridView)`
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
