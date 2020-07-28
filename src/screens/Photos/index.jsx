import React from "react";
import { Header } from "../../components/Header";
import { PhotoGrid } from "../../components/PhotoGrid/PhotoGrid";

export const Photos = ({ match, location }) => {
  // console.log("match", match);
  // console.log("location", location);
  return (
    <>
      <Header />
      <PhotoGrid categoryId={parseInt(match.params.categoryId)} />
    </>
  );
};
