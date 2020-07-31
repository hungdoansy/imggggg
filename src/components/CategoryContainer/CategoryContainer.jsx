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
      <p>Below are categories created </p>
      <CategoryGrid currentPage={page} />
    </Container>
  );
});
