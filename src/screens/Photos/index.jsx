import React from "react";
import { Header } from "../../components/Header";
import { PhotoGrid } from "../../components/PhotoGrid/PhotoGrid";
import { useHashParams } from "../../utils/hooks";

export const Photos = ({ match }) => {
  const hashParams = useHashParams();

  const categoryId = parseInt(match.params.categoryId);
  const categoryName = "something";
  const page = hashParams.getPage();

  return (
    <>
      <Header />
      <PhotoGrid
        categoryId={categoryId}
        categoryName={categoryName}
        currentPage={page}
      />
    </>
  );
};
