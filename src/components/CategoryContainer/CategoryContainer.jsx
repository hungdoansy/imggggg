import React from "react";
import { CategoryGrid } from "../CategoryGrid/CategoryGrid";
import { useHashParams } from "../../utils/hooks";
import { withRouter } from "react-router";

export const CategoryContainer = withRouter(() => {
  const hashParams = useHashParams();
  const page = hashParams.getPage();

  return (
    <>
      <CategoryGrid currentPage={page} />
    </>
  );
});
