import React from "react";
import { Header } from "../../components/Header";
import { CategoryGrid } from "../../components/CategoryGrid/CategoryGrid";
import { useHashParams } from "../../utils/hooks";

export const Categories = () => {
  const hashParams = useHashParams();
  const page = hashParams.getPage();

  return (
    <>
      <Header />
      <CategoryGrid currentPage={page} />
    </>
  );
};
