import React, { useEffect, useState } from "react";
import { CategoryGrid } from "../CategoryGrid/CategoryGrid";
import { useHashParams } from "../../utils/hooks";
import { withRouter } from "react-router";

export const CategoryContainer = withRouter(() => {
  const hashParams = useHashParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(hashParams.getPage());
  }, [hashParams]);

  return (
    <>
      <p>Below is categories updated </p>
      <CategoryGrid currentPage={page} />
    </>
  );
});
