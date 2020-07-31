import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

import { CategoryGrid } from "../CategoryGrid/CategoryGrid";
import { useHashParams } from "../../utils/hooks";

import { Container } from "../Container";

export const CategoryContainer = withRouter(() => {
  const hashParams = useHashParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(hashParams.getPage());
  }, [hashParams]);

  return (
    <Container>
      <div>
        <p className="u-text1150 u-textDark">Categories</p>
        <p className="u-textGray u-text300">
          There are a total of <b>10</b> categories
        </p>
      </div>
      <CategoryGrid currentPage={page} />
    </Container>
  );
});
