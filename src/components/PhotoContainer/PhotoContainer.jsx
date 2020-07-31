import React from "react";
import { PhotoGrid } from "../../components/PhotoGrid/PhotoGrid";
import { useHashParams } from "../../utils/hooks";

export const PhotoContainer = ({ match }) => {
  const hashParams = useHashParams();

  const categoryId = parseInt(match.params.categoryId);
  const categoryName = "something";
  const page = hashParams.getPage();

  return (
    <>
      <PhotoGrid
        categoryId={categoryId}
        categoryName={categoryName}
        currentPage={page}
      />
    </>
  );
};
