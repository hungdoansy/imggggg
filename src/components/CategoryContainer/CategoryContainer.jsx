import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

import { CategoryGrid } from "./components/CategoryGrid/CategoryGrid";
import { useHashParams } from "../../utils/hooks";

import { Container } from "../common/Container/Container";
import { selectors } from "../../reducers";
import { useSelector } from "react-redux";

export const CategoryContainer = withRouter(() => {
  const hashParams = useHashParams();
  const totalCategories = useSelector(selectors.getTotalNumberOfCategories);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(hashParams.getPage());
  }, [hashParams]);

  return (
    <Container>
      <div>
        <p className="u-text1150 u-textDark">Categories</p>
        <p className="u-textGray u-text300">
          There are a total of <b>{totalCategories}</b> categories
        </p>
      </div>
      <CategoryGrid currentPage={page} />
    </Container>
  );
});
